const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');
const os=require('node:os');
const {scrape,resolveLink}=require('./scrape');
const {parseQuestionsMarkdown}=require('./public/parser');
const base='https://www.examtopics.com/exams/amazon/example/view/';
function page(nums,next=false) {
    const cards=nums.map(n=>'<div class="exam-question-card"><header class="card-header">Question #'+n+' Topic 1</header><p class="card-text">Example?</p><li class="multi-choice-item">A. First</li><li class="multi-choice-item">B. Second</li><div class="question-answer">Correct Answer: A Community vote</div></div>').join('');
    return '<h2>2 Questions &amp; Answers</h2>'+cards+(next?'<a href="'+base+'2/">Next</a>':'');
}
test('absolute and relative pagination',()=>{
    assert.equal(resolveLink(base,base).href,base);
    assert.equal(resolveLink('2/',base).href,base+'2/');
});
test('failed page preserves original; retry yields two unique questions',async t=>{
    const dir=await fs.mkdtemp(path.join(os.tmpdir(),'quizzs-'));
    t.after(()=>fs.rm(dir,{recursive:true,force:true}));
    const file=path.join(dir,'amazon_example.md');
    await fs.writeFile(file,'original');
    await assert.rejects(scrape(dir,'amazon','example',{},async url=>{
        if(url!==base) throw Error('HTTP 429');
        return page([1],true);
    }),/429/);
    assert.equal(await fs.readFile(file,'utf8'),'original');
    assert.equal(await scrape(dir,'amazon','example',{},async url=>url===base?page([1],true):page([1,2])),2);
    assert.equal(parseQuestionsMarkdown(await fs.readFile(file,'utf8')).length,2);
});
test('partial final page cannot publish',async t=>{
    const dir=await fs.mkdtemp(path.join(os.tmpdir(),'quizzs-'));
    t.after(()=>fs.rm(dir,{recursive:true,force:true}));
    await assert.rejects(scrape(dir,'amazon','example',{},async()=>page([1])),/1\/2/);
    await assert.rejects(fs.access(path.join(dir,'amazon_example.md')));
});
