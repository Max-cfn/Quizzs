const {test} = require('node:test');
const assert = require('node:assert/strict');
const {parseQuestionsMarkdown} = require('./public/parser');
const {reviewForumDownload} = require('./forum');

function question(number, comments = '', official = '', stem = 'Which service delivers this requirement?') {
    return '## Example topic 1 question ' + number + ' discussion\n\n' +
        'Topic #: 1\n\n' + stem + '\n\nA. First answer\nB. Second answer\nC. Third answer\n\n' +
        '**Answer: ' + official + '**\n\nComments: ' + comments;
}
const evidence = 'reader 2 months ago Selected Answer: B A supported explanation with the technical details upvoted 2 times';
const markdown = (...parts) => parts.join('\n\n----------------------------------------\n\n');

test('aggregates unique authors with votes and recency and picks supporting evidence', () => {
    const text = 'old-user Highly Voted 3 years ago Selected Answer: A Older rationale for the first answer upvoted 4 times ' +
        'new-user 2 days ago Selected Answer: B Recent technical reason for the correct second answer upvoted 1 time ' +
        'new-user 1 day ago Selected Answer: B Updated reason supporting this second answer upvoted 1 time ' +
        'other.user 3 days ago Selected Answer: B Another rationale supports the second answer upvoted 1 times';
    const [result] = parseQuestionsMarkdown(question(1, text));
    assert.equal(result.discussions.length, 4);
    assert.equal(result.correctAnswer, 'B');
    assert.equal(result.answerConfidence, 1);
    assert.match(result.explanation, /^Updated reason/);
});

test('does not grade unresolved ties or use evidence for an opposing answer', () => {
    const votes = 'a 1 day ago Selected Answer: A First choice has this explanation upvoted 1 times ' +
        'b 1 day ago Selected Answer: B Second choice has this explanation upvoted 1 times';
    assert.equal(parseQuestionsMarkdown(question(1, votes))[0].correctAnswer, '');
    assert.equal(parseQuestionsMarkdown(question(1, evidence, 'A'))[0].explanation, '');
});

test('accepts a multiple-choice combination once and rejects an invalid letter or cardinality', () => {
    const stem = 'Which two services deliver this requirement? (Choose two.)';
    const text = 'reader 1 day ago Selected Answer: B, A Both services are needed for the design upvoted 3 times ' +
        'other 1 hour ago Selected Answer: B This option alone is not sufficient upvoted 100 times';
    assert.equal(parseQuestionsMarkdown(question(1, text, 'AZ', stem))[0].correctAnswer, 'AB');
});

test('applies the rounded 75-percent gate and keeps only usable distinct questions', () => {
    const raw = markdown(question(1, evidence), question(2, evidence), question(3, evidence), question(4));
    assert.throws(() => reviewForumDownload(raw, 5, 4), /3\/5 .*seuil 4/);
    assert.throws(() => reviewForumDownload(raw, 4, 3), /nombre de questions/);
    const accepted = reviewForumDownload(raw, 4, 4);
    assert.equal(accepted.count, 3);
    assert.equal(parseQuestionsMarkdown(accepted.markdown).length, 3);
    assert.throws(() => reviewForumDownload(raw, 4, 4, raw), /existant/);
    const duplicate = markdown(question(1, evidence), question(1, evidence), question(2, evidence));
    assert.throws(() => reviewForumDownload(duplicate, 3, 3), /2\/3 .*seuil 3/);
});
