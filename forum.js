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
        const count = parseQuestionsMarkdown(markdown).length;
        if (count === 0 || count !== expected) throw new Error('Le Markdown ne contient pas toutes les questions attendues.');
        const previous = await fs.readFile(destination, 'utf8').catch(err => {
            if (err.code === 'ENOENT') return '';
            throw err;
        });
        if (parseQuestionsMarkdown(previous).length > count) throw new Error('Le fichier existant contient davantage de questions.');
        await fs.rename(temporaryFile, destination);
        return count;
    } finally {
        await fs.rm(temporaryFile, { force: true });
    }
}

module.exports = { downloadForum };
