const fs = require('node:fs');
const { parseQuestionsMarkdown } = require('./public/parser');

const [input, totalString, output] = process.argv.slice(2);
const total = Number(totalString);
if (!input || !output || !Number.isInteger(total) || total < 1) {
    throw new Error('Usage: node evaluate-shared.js input.md total output.md');
}

const text = fs.readFileSync(input, 'utf8');
const usable = new Map();
const parsed = parseQuestionsMarkdown(text);
for (const block of text.split(/^-{3,}$/m)) {
    const [question] = parseQuestionsMarkdown(block);
    if (question && question.number !== '?' && question.text !== question.title &&
        question.choices.length >= 2 && question.correctAnswer && question.explanation) {
        usable.set(question.id, block.trim());
    }
}
const required = 1;
console.log(JSON.stringify({ total, parsed: parsed.length, usable: usable.size, required }));
if (usable.size < required) {
    throw new Error('No usable questions with a community answer and explanation.');
}
fs.mkdirSync(require('node:path').dirname(output), { recursive: true });
fs.writeFileSync(output, [...usable.values()].join('\n\n----------------------------------------\n\n') + '\n');

