const { execFile, spawn } = require('node:child_process');
const { createInterface } = require('node:readline');
const { promisify } = require('node:util');
const fs = require('node:fs/promises');
const path = require('node:path');
const { randomUUID } = require('node:crypto');
const { parseQuestionsMarkdown } = require('./public/parser');

const exec = promisify(execFile);
const image = 'quizzs-forum-downloader:local';
let build;

function buildDownloader() {
    if (!build) {
        const context = path.join(__dirname, 'downloader');
        build = exec('docker', ['build', '-t', image, context], { timeout: 300000 })
            .catch(err => {
                build = undefined;
                throw new Error(err.code === 'ENOENT' ? 'Docker doit être installé et démarré.' :
                    'Construction du downloader impossible : ' + (err.stderr || err.message).trim().split('\n').at(-1));
            });
    }
    return build;
}

function runDownloader(args, job) {
    return new Promise((resolve, reject) => {
        const process = spawn('docker', args, { stdio: ['ignore', 'pipe', 'pipe'] });
        let error = '';
        process.stderr.setEncoding('utf8');
        const lines = createInterface({ input: process.stdout });
        lines.on('line', line => {
            const coverage = line.match(/^Coverage: (\d+)\/(\d+) questions, (\d+) explicit answers, (\d+) available$/);
            if (coverage) job.availableQuestions = Number(coverage[4]);
            if (line) {
                job.stepLabel = line;
                job.logLines = [...job.logLines, line].slice(-5);
            }
        });
        process.stderr.on('data', data => { error = (error + data).slice(-2000); });
        process.once('error', reject);
        process.once('close', code => {
            if (code === 0) resolve();
            else reject(new Error(error.trim() || 'Le downloader s’est arrêté (code ' + code + ').'));
        });
    });
}

async function downloadForum(examsDir, provider, slug, job) {
    await buildDownloader();
    const stateDir = path.join(examsDir, '.forum-state');
    await fs.mkdir(stateDir, { recursive: true });
    const candidate = randomUUID() + '.md';
    const temporaryFile = path.join(stateDir, candidate);
    const destination = path.join(examsDir, provider + '_' + slug.replace(/-/g, '_') + '.md');
    const user = process.getuid ? ['--user', process.getuid() + ':' + process.getgid()] : [];
    const args = ['run', '--rm', ...user, '-v', stateDir + ':/state', image,
        '-p', provider, '-s', slug, '-o', '/state/' + candidate];
    job.stepLabel = 'Lecture du forum';
    try {
        await runDownloader(args, job);
        const markdown = await fs.readFile(temporaryFile, 'utf8');
        const expected = Number(job.stepLabel.match(/^Complete: (\d+) questions$/)?.[1]);
        const previous = await fs.readFile(destination, 'utf8').catch(err => {
            if (err.code === 'ENOENT') return '';
            throw err;
        });
        const reviewed = reviewForumDownload(markdown, job.availableQuestions, expected, previous);
        job.missingAnswers = reviewed.missingAnswers;
        await fs.writeFile(temporaryFile, reviewed.markdown, 'utf8');
        await fs.rename(temporaryFile, destination);
        return reviewed.count;
    } finally {
        await fs.rm(temporaryFile, { force: true });
    }
}

function reviewForumDownload(markdown, available, expected, previous = '') {
    if (!Number.isInteger(available) || available < 1 || !Number.isInteger(expected) || expected < 1) {
        throw new Error('La couverture du forum est inconnue.');
    }
    const usable = new Map();
    let parsed = 0;
    let missingAnswers = 0;
    for (const block of markdown.split(/^-{3,}$/m)) {
        const [question] = parseQuestionsMarkdown(block);
        if (!question) continue;
        parsed++;
        if (!question.correctAnswer) missingAnswers++;
        if (question.number !== '?' && question.choices.length >= 2 &&
            question.text !== question.title && question.correctAnswer && question.explanation) {
            usable.set(question.id, block.trim());
        }
    }
    if (parsed !== expected) throw new Error('Le Markdown ne correspond pas au nombre de questions extraites.');
    const minimum = Math.ceil(available * 0.75);
    if (usable.size < minimum) {
        throw new Error(`Forum incomplet ou inexploitable · ${usable.size}/${available} questions avec réponse et explication, seuil ${minimum}.`);
    }
    if (parseQuestionsMarkdown(previous).length > usable.size) {
        throw new Error('Le fichier existant contient davantage de questions.');
    }
    return {
        count: usable.size,
        missingAnswers,
        markdown: [...usable.values()].join('\n\n----------------------------------------\n\n') + '\n'
    };
}

module.exports = { downloadForum, reviewForumDownload };

