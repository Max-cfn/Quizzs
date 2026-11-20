const cheerio = require('cheerio');
const fs = require('node:fs/promises');
const path = require('node:path');
const {parseQuestionsMarkdown} = require('./public/parser');
const origin = 'https://www.examtopics.com';
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function resolveLink(href, base) {
    if (!href) return;
    try {
        const url = new URL(href, base);
        if (url.origin === origin && !url.username && !url.password) return url;
    } catch {}
}

async function read(url) {
    for (let attempt = 1; ; attempt++) {
        const response = await fetch(url, {signal:AbortSignal.timeout(30000), redirect:'error'});
        if (response.ok) return response.text();
        const retry = response.headers.get('retry-after');
        await response.body?.cancel();
        const delay = !retry ? attempt*2000 : /^\d+$/.test(retry) ? Number(retry)*1000 : Math.max(0,Date.parse(retry)-Date.now());
        if (![429,503].includes(response.status) || attempt===3 || !(delay<=60000))
            throw Error('ExamTopics HTTP '+response.status+(retry?' · Retry-After '+retry:''));
        await wait(delay);
    }
}

async function catalog(provider) {
    const base = origin+'/exams/'+provider+'/';
    const $ = cheerio.load(await read(base));
    const exams = new Map();
    $('a[href]').each((_,a)=>{
        const url=resolveLink($(a).attr('href'), base);
        if (!url?.href.startsWith(base)) return;
        const slug=url.href.slice(base.length).replace(/\/$/,'');
        if (/^[a-z0-9-]+$/.test(slug)) exams.set(slug,{slug,name:$(a).text().trim()||slug,url:url.href});
    });
    if (!exams.size) throw Error('Catalogue vide ou inaccessible');
    return [...exams.values()];
}

function parsePage(html,url,base) {
    const $=cheerio.load(html);
    const total=Number($('body').text().match(/([\d,]+)\s+Questions\s*(?:&|and)\s*Answers/i)?.[1].replace(/,/g,''));
    const questions=[];
    function text(el) {
        const copy=el.clone();
        copy.find('br').replaceWith(' ');
        copy.find('.most-voted-answer-badge').remove();
        copy.find('img').each((_,img)=>{
            const src=new URL($(img).attr('src')||'',url);
            if (src.protocol!=='https:') throw Error('Illustration inaccessible');
            $(img).replaceWith(' [Illustration]('+src.href+') ');
        });
        return copy.text().replace(/\s+/g,' ').trim();
    }
    $('.exam-question-card').each((_,el)=>{
        const card=$(el), header=text(card.find('.card-header').first());
        const number=header.match(/Question\s*#?\s*(\d+)/i)?.[1];
        const topic=header.match(/Topic\s*#?\s*(\d+)/i)?.[1]||'1';
        const stem=text(card.find('.card-text').not('.question-answer').first());
        const choices=card.find('.multi-choice-item').map((i,x)=>text($(x))).get();
        const answer=(text(card.find('.correct-answer').first()) ||
            text(card.find('.question-answer')).match(/Correct Answer:\s*([A-F](?:\s*,?\s*[A-F])*)\b(?=\s|$)/)?.[1] || '').replace(/[\s,]/g,'');
        if (!number || !stem || choices.length<2 || choices.some(c=>!/^[A-F][.:]/.test(c)) || !/^[A-F]+$/.test(answer) ||
            [...answer].some(letter=>!choices.some(c=>c.startsWith(letter)))) throw Error('Question incomplète · '+(number||url));
        questions.push({topic,number,md:['## Question #'+number,'Question #: '+number,'Topic #: '+topic,stem,
            ...choices.map(c=>c.replace(/^([A-F])[.:]\s*/,'$1. ')),'**Answer: '+answer+'**',text(card.find('.answer-description')),
            '[View on ExamTopics]('+url+')','----------------------------------------'].filter(Boolean).join('\n\n')});
    });
    const links=$('a[href]').map((_,a)=>resolveLink($(a).attr('href'),url)?.href).get()
        .filter(link=>link.startsWith(base) && /^\d+\/?$/.test(link.slice(base.length)));
    const visible=$('body').clone();
    visible.find('script,style').remove();
    const notice=visible.text().replace(/\s+/g,' ').match(/(?:please (?:verify|confirm) (?:that )?you are (?:a )?human|verify you are human|captcha|contributor access required|sign in to continue|log in to continue)/i)?.[0];
    const pageTitle=$('title').text().trim().slice(0,120);
    return {questions,links:[...new Set(links)],total,notice:notice||pageTitle};
}

async function scrape(dir,provider,slug,job,fetchPage=read) {
    const base=origin+'/exams/'+provider+'/'+slug+'/view/';
    const dest=path.join(dir,provider+'_'+slug.replace(/-/g,'_')+'.md');
    const checkpoint=dest+'.partial.json';
    const first=parsePage(await fetchPage(base),base,base);
    const total=first.total;
    if (!total) throw Error('Total attendu indisponible');
    let state={total,pages:{},pending:[base]};
    try {
        const saved=JSON.parse(await fs.readFile(checkpoint,'utf8'));
        if(saved.total===total && saved.pending.length && saved.pending.every(u=>u.startsWith(base))) state=saved;
    } catch {}
    const unique=new Map();
    function add(q) { unique.set(q.topic+'/'+q.number,q); }
    for (const page of Object.values(state.pages)) page.forEach(add);
    while (state.pending.length) {
        const url=state.pending[0];
        job.stepLabel=unique.size+'/'+total+' questions';
        const page=url===base?first:parsePage(await fetchPage(url),url,base);
        if (!page.questions.length) throw Error('Page sans questions · '+url+' · '+(page.notice||'aucun titre'));
        page.questions.forEach(add);
        state.pages[url]=page.questions;
        state.pending.shift();
        for(const link of page.links) if (!state.pages[link] && !state.pending.includes(link)) state.pending.push(link);
        await fs.writeFile(checkpoint+'.tmp',JSON.stringify(state));
        await fs.rename(checkpoint+'.tmp',checkpoint);
        if(state.pending.length) await wait(1000);
    }
    const md=[...unique.values()].sort((a,b)=>a.topic-b.topic || a.number-b.number).map(q=>q.md).join('\n\n')+'\n';
    if(unique.size!==total || parseQuestionsMarkdown(md).length!==total) throw Error('Collecte partielle · '+unique.size+'/'+total);
    let previous='';
    try {previous=await fs.readFile(dest,'utf8');} catch(e) {if(e.code!=='ENOENT') throw e;}
    if(parseQuestionsMarkdown(previous).length>total) throw Error('Le fichier existant contient davantage de questions');
    await fs.writeFile(dest+'.tmp',md);
    await fs.rename(dest+'.tmp',dest);
    await fs.unlink(checkpoint);
    return total;
}
module.exports={scrape,catalog,parsePage,resolveLink};
