const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

function walk(directory) {
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
        const full = path.join(directory, entry.name);
        return entry.isDirectory() ? walk(full) : [full];
    });
}

const files = walk(process.argv[2]);
let accepted = 0;
for (const file of files.filter(file => file.endsWith('.md'))) {
    const name = path.basename(file, '.md');
    const split = name.indexOf('-');
    if (split < 1) continue;
    const provider = name.slice(0, split);
    const slug = name.slice(split + 1);
    if (!/^[a-z0-9-]+$/.test(provider) || !/^[a-z0-9-]+$/.test(slug)) continue;
    const progressName = provider + '_' + slug + '.json';
    const states = files.filter(candidate => path.basename(candidate) === progressName);
    if (states.length !== 1) {
        console.log(name, 'skipped: progress file missing or ambiguous');
        continue;
    }
    const state = JSON.parse(fs.readFileSync(states[0], 'utf8'));
    const total = Number(state.Total);
    if (!Number.isInteger(total) || total < 1) {
        console.log(name, 'skipped: source total unavailable');
        continue;
    }
    const output = path.join('shared-exams', provider + '_' + slug.replace(/-/g, '_') + '.md');
    const result = spawnSync(process.execPath, ['evaluate-shared.js', file, String(total), output], { encoding: 'utf8' });
    console.log(name, result.stdout.trim(), result.status === 0 ? 'accepted' : 'rejected');
    if (result.status === 0) accepted++;
    else console.log(result.stderr.trim().split('\n')[0]);
}
console.log('Accepted:', accepted);
