/**
 * Parser for examtopics-downloader markdown output.
 * Handles both legacy and new formats produced by
 * https://github.com/thatonecodes/examtopics-downloader
 *
 * Legacy format:
 *   ## Exam X topic 1 question 5 discussion
 *   Question #: 5  /  Topic #: 1
 *   A. choice text
 *   **Answer: C**
 *
 * New format:
 *   ## Examtopics X_NN question #1
 *   **A:** choice text
 *   **Answer: C**
 *   Comments: [user] Selected Answer: C ...
 */

function parseQuestionsMarkdown(content) {
    const questions = [];
    const blocks = content.split(/^-{3,}$/m).filter(b => b.trim());
    for (const block of blocks) {
        const q = parseQuestionBlock(block.trim());
        if (q) questions.push(q);
    }
    return questions;
}

function parseQuestionBlock(block) {
    const lines = block.split('\n');

    // ─── Question & topic numbers (both formats) ──────────────────────
    const questionNumMatch =
        block.match(/Question\s*#:\s*(\d+)/i) ||      // legacy
        block.match(/question\s*#\s*(\d+)/i) || block.match(/^##[^\n]*\bquestion\s+(\d+)\s+discussion\b/im);          // new "question #1"
    const topicNumMatch = block.match(/Topic\s*#:\s*(\d+)/i) || block.match(/^##[^\n]*\btopic\s+(\d+)\s+question\b/im);
    const headerMatch = block.match(/##\s*(.+?)(?:\n|$)/);

    // ─── Extract choices (both formats) ───────────────────────────────
    // Legacy: "A. text"   New: "**A:** text"
    const choices = [];
    let firstChoiceIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (/^(?:\*\*Answer:|Comments:)/i.test(line)) break;
        const m = line.match(/^\*\*([A-F])[.:]?\*\*[:.]?\s*(.+)/) ||  // **A:** **A.** **A**
                  line.match(/^([A-F])[.:]\s+(.+)/);                   // A. or A:
        if (m) {
            choices.push({ letter: m[1].toUpperCase(), text: m[2].trim() });
            if (firstChoiceIdx === -1) firstChoiceIdx = i;
        }
    }

    if (choices.length === 0) return null;

    // ─── Question text (everything before the first choice) ───────────
    let questionStartIdx = 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.match(/^\[All\s+.*Questions\]/i)) { questionStartIdx = i + 1; break; }
        if (line.match(/Topic\s*#:\s*\d+/i)) { questionStartIdx = i + 1; }
        if (line.match(/^##\s*Examtopics/i)) { questionStartIdx = i + 1; }
    }

    let questionText = '';
    if (firstChoiceIdx > questionStartIdx) {
        questionText = lines.slice(questionStartIdx, firstChoiceIdx)
            .map(l => l.trim())
            .filter(l => l &&
                !l.match(/^Suggested Answer:/i) &&
                !l.match(/^🗳️$/) &&
                !l.match(/^\*\*Answer:/i) &&
                !l.match(/^Question\s*#/i) &&
                !l.match(/^Topic\s*#/i))
            .join('\n').trim();
    }
    questionText = questionText.replace(/Suggested Answer:\s*[A-F]+\s*🗳️?\s*/gi, '').trim();

    const chooseMatch = questionText.match(/\(Choose\s+(\w+)\.?\)/i);
    const words = {one: 1, two: 2, three: 3, four: 4, five: 5};
    const required = chooseMatch ? words[chooseMatch[1].toLowerCase()] || Number(chooseMatch[1]) : 0;
    const allowed = new Set(choices.map(choice => choice.letter));
    function validAnswer(value) {
        const letters = value.toUpperCase().replace(/[\s,]/g, '').split('');
        if (!letters.length || (required && letters.length !== required) ||
            new Set(letters).size !== letters.length || !letters.every(letter => allowed.has(letter))) return '';
        return letters.sort().join('');
    }

    const answerMatch = block.match(/^\*\*Answer:[ \t]*([A-F]+)\*\*\s*$/im) ||
        block.match(/^Suggested Answer:[ \t]*([A-F]+)\b/im);
    const official = validAnswer(answerMatch?.[1] || '');
    const discussions = parseDiscussions(block);
    const community = communityAnswer(discussions, validAnswer, official);
    const correctAnswer = official || community.answer;
    const answerConfidence = official ? 2 : correctAnswer ? 1 : 0;
    const expectedCount = required || correctAnswer.length || 1;
    const multiAnswer = expectedCount > 1;
    const explanation = community.explanation;

    // ─── ExamTopics link ──────────────────────────────────────────────
    let link = '';
    const linkMatch =
        block.match(/\[View on ExamTopics\]\((https:\/\/[^\)]+)\)/) ||
        block.match(/(https:\/\/www\.examtopics\.com\/discussions\/[^\s\)]+)/);
    if (linkMatch) link = linkMatch[1];

    // ─── Timestamp ────────────────────────────────────────────────────
    let timestamp = '';
    const tsMatch = block.match(/\*\*Timestamp:\s*(.+?)\*\*/);
    if (tsMatch) timestamp = tsMatch[1].trim();

    const topicNum = topicNumMatch ? topicNumMatch[1] : '1';
    const questionNum = questionNumMatch ? questionNumMatch[1] : '?';
    const title = headerMatch ? headerMatch[1].trim() : `Question ${questionNum}`;

    return {
        id: `t${topicNum}q${questionNum}`,
        title,
        topic: topicNum,
        number: questionNum,
        text: questionText || title,
        choices,
        correctAnswer,
        answerConfidence,
        multiAnswer,
        expectedCount,
        link,
        timestamp,
        explanation,
        discussions
    };
}

function parseDiscussions(block) {
    const text = block.match(/^Comments:[ \t]*([\s\S]*)$/im)?.[1];
    if (!text) return [];
    const discussions = [];
    const relative = String.raw`(?:\d+|an?)\s+\w+(?:,\s*(?:\d+|an?)\s+\w+)?\s+ago|just now`;
    // Split at comment headers, so a reply without votes cannot inherit the next reply's votes.
    const header = new RegExp(String.raw`(?:^|\s)([\w.-]+)\s+(?:(Highly Voted|Most Recent)\s+)?(${relative})(?=\s|$)`, 'gi');
    const matches = [...text.matchAll(header)];
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        const body = text.slice(match.index + match[0].length, matches[i + 1]?.index).trim();
        const selected = body.match(/^Selected Answer:\s*([A-F]+(?:\s*,\s*[A-F]+)*)\b/i);
        const votes = body.match(/\s*upvoted\s+(\d+)\s+times?\s*$/i);
        discussions.push({
            user: match[1], badge: match[2] || '', time: match[3],
            selectedAnswer: selected?.[1].toUpperCase() || '',
            text: body.slice(selected?.[0].length || 0, votes?.index).trim(),
            votes: Number(votes?.[1] || 0)
        });
    }
    if (discussions.length) return discussions;
    const headers = [...text.matchAll(/(?:^|\s)\[([\w.-]+)\]\s*(?:Selected Answer:\s*([A-F]+(?:\s*,\s*[A-F]+)*)\b)?/gi)];
    return headers.map((match, i) => ({
        user: match[1], time: '', badge: '', votes: 0,
        selectedAnswer: match[2]?.toUpperCase() || '',
        text: text.slice(match.index + match[0].length, headers[i + 1]?.index).trim()
    }));
}

function commentAgeDays(time) {
    const days = {second: 1 / 86400, minute: 1 / 1440, hour: 1 / 24, day: 1, week: 7, month: 30, year: 365};
    if (/^just now$/i.test(time)) return 0;
    let age = 0;
    let known = false;
    for (const match of time.matchAll(/(\d+|an?)\s+(second|minute|hour|day|week|month|year)s?\b/gi)) {
        known = true;
        age += (Number(match[1]) || 1) * days[match[2].toLowerCase()];
    }
    return known ? age : Infinity;
}

function communityAnswer(discussions, validAnswer, official) {
    const byAuthor = new Map();
    for (const reply of discussions) {
        const declared = reply.text.match(/^(?:(?:the )?correct answer is|answer:|option)\s+([A-F]+(?:\s*,\s*[A-F]+)*)\b/i);
        const answer = validAnswer(reply.selectedAnswer || declared?.[1] || '');
        if (!answer) continue;
        const age = commentAgeDays(reply.time);
        const weight = (1 + Math.log2(1 + reply.votes)) * (0.5 + 0.5 / (1 + age / 180));
        const author = reply.user.toLowerCase();
        const previous = byAuthor.get(author);
        if (!previous || age < previous.age || (age === previous.age && weight > previous.weight)) {
            byAuthor.set(author, {answer, weight, age, text: reply.text});
        }
    }
    const scores = new Map();
    for (const reply of byAuthor.values()) {
        scores.set(reply.answer, (scores.get(reply.answer) || 0) + reply.weight);
    }
    const ranked = [...scores].sort((a, b) => b[1] - a[1]);
    const answer = official || (ranked[0] && (!ranked[1] || ranked[0][1] - ranked[1][1] > 1e-9) ? ranked[0][0] : '');
    const best = [...byAuthor.values()]
        .filter(reply => reply.answer === answer && reply.text.trim().split(/\s+/).length >= 5)
        .sort((a, b) => b.weight - a.weight)[0];
    return {answer, explanation: best?.text || ''};
}

if (typeof module !== 'undefined') module.exports = {parseQuestionsMarkdown};

