const express = require('express');
const fs = require('fs');
const path = require('path');
const {catalog} = require('./scrape');
const {downloadForum} = require('./forum');
const {parseQuestionsMarkdown} = require('./public/parser');

// Prevent crashes from unhandled errors
process.on('uncaughtException', (err) => {
    console.error('⚠ Uncaught exception (non-fatal):', err.message);
});
process.on('unhandledRejection', (err) => {
    console.error('⚠ Unhandled rejection (non-fatal):', err.message || err);
});

const app = express();
const PORT = 3000;
const EXAMS_DIR = path.join(__dirname, 'exams');

// Ensure exams directory exists
if (!fs.existsSync(EXAMS_DIR)) {
    fs.mkdirSync(EXAMS_DIR, { recursive: true });
}

// Clean up orphaned download metadata files from interrupted downloads
try {
    fs.readdirSync(EXAMS_DIR)
        .filter(f => f.startsWith('.dl-') && f.endsWith('.json'))
        .forEach(f => fs.unlinkSync(path.join(EXAMS_DIR, f)));
} catch {}

// Custom exam names (user renames) stored in a JSON map: filename -> custom name
const NAMES_FILE = path.join(EXAMS_DIR, '.custom-names.json');

function loadCustomNames() {
    try {
        return JSON.parse(fs.readFileSync(NAMES_FILE, 'utf8'));
    } catch {
        return {};
    }
}

function saveCustomNames(names) {
    fs.writeFileSync(NAMES_FILE, JSON.stringify(names, null, 2));
}

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Known providers for matching
const PROVIDERS = [
    { id: 'amazon', name: 'Amazon (AWS)', keywords: ['aws', 'amazon'] },
    { id: 'hashicorp', name: 'HashiCorp', keywords: ['hashicorp', 'terraform', 'vault', 'consul'] },
    { id: 'google', name: 'Google Cloud', keywords: ['google', 'gcp'] },
    { id: 'microsoft', name: 'Microsoft', keywords: ['microsoft', 'azure', 'ms'] },
    { id: 'anthropic', name: 'Anthropic', keywords: ['anthropic', 'claude'] },
    { id: 'nvidia', name: 'NVIDIA', keywords: ['nvidia'] },
    { id: 'databricks', name: 'Databricks', keywords: ['databricks'] },
    { id: 'snowflake', name: 'Snowflake', keywords: ['snowflake', 'snowpro'] },
    { id: 'cisco', name: 'Cisco', keywords: ['cisco'] },
    { id: 'comptia', name: 'CompTIA', keywords: ['comptia'] },
    { id: 'isc2', name: 'ISC2', keywords: ['isc2', 'cissp'] },
    { id: 'salesforce', name: 'Salesforce', keywords: ['salesforce'] },
    { id: 'fortinet', name: 'Fortinet', keywords: ['fortinet', 'nse'] },
    { id: 'juniper', name: 'Juniper', keywords: ['juniper'] },
    { id: 'isaca', name: 'ISACA', keywords: ['isaca'] },
    { id: 'vmware', name: 'VMware', keywords: ['vmware'] },
    { id: 'servicenow', name: 'ServiceNow', keywords: ['servicenow'] },
    { id: 'ec-council', name: 'EC-Council', keywords: ['ec-council', 'ceh'] },
    { id: 'oracle', name: 'Oracle', keywords: ['oracle'] },
    { id: 'paloaltonetworks', name: 'Palo Alto Networks', keywords: ['paloalto', 'paloaltonetworks'] },
];

function detectProvider(filename, content) {
    const lower = filename.toLowerCase();
    for (const p of PROVIDERS) {
        for (const kw of p.keywords) {
            if (lower.includes(kw)) return p;
        }
    }
    // Try content
    if (content) {
        const contentLower = content.substring(0, 2000).toLowerCase();
        for (const p of PROVIDERS) {
            for (const kw of p.keywords) {
                if (contentLower.includes(kw)) return p;
            }
        }
    }
    return { id: 'other', name: 'Autre' };
}

// API: List downloaded exams (grouped by provider)
app.get('/api/exams', (req, res) => {
    try {
        const files = fs.readdirSync(EXAMS_DIR)
            .filter(f => f.endsWith('.md'))
            .map(f => {
                const filePath = path.join(EXAMS_DIR, f);
                const stats = fs.statSync(filePath);
                const content = fs.readFileSync(filePath, 'utf8');
                const questionCount = parseQuestionsMarkdown(content).length;
                // Try multiple header formats to extract the exam name
                let examMatch = content.match(/##\s*Exam\s+(.+?)\s+topic/i)       // "Exam X topic Y question"
                             || content.match(/##\s*Examtopics\s+(.+?)(?:_\d+)?\s+question/i)  // "Examtopics X_NN question"
                             || content.match(/Exam\s+(.+?)\s+topic/i);
                const provider = detectProvider(f, content);
                // Use the raw exam name from the file content, or fallback to filename
                let examName = examMatch ? examMatch[1].trim() : f.replace(/\.md$/, '').replace(/_/g, ' ');
                
                // Apply custom name if user renamed it
                const customNames = loadCustomNames();
                const displayName = customNames[f] || examName;
                return {
                    filename: f,
                    name: displayName,
                    originalName: examName,
                    isCustom: !!customNames[f],
                    provider: provider.id,
                    providerName: provider.name,
                    size: stats.size,
                    questions: Math.max(questionCount, 0),
                    downloadedAt: stats.mtime.toISOString(),
                };
            });
        
        // Group by provider
        const grouped = {};
        for (const exam of files) {
            if (!grouped[exam.provider]) {
                grouped[exam.provider] = {
                    id: exam.provider,
                    name: exam.providerName,
                    exams: []
                };
            }
            grouped[exam.provider].exams.push(exam);
        }

        res.json({ exams: files, grouped: Object.values(grouped) });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API: Get exam content
app.get('/api/exams/:filename', (req, res) => {
    const filePath = path.join(EXAMS_DIR, req.params.filename);
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Exam not found' });
    }
    const content = fs.readFileSync(filePath, 'utf8');
    res.json({ content });
});

// API: Delete an exam
app.delete('/api/exams/:filename', (req, res) => {
    const filePath = path.join(EXAMS_DIR, req.params.filename);
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Exam not found' });
    }
    fs.unlinkSync(filePath);
    // Also remove any custom name entry
    const names = loadCustomNames();
    if (names[req.params.filename]) {
        delete names[req.params.filename];
        saveCustomNames(names);
    }
    res.json({ success: true });
});

// API: Rename an exam (custom display name)
app.put('/api/exams/:filename/rename', express.json(), (req, res) => {
    const filePath = path.join(EXAMS_DIR, req.params.filename);
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Exam not found' });
    }
    const { name } = req.body;
    const names = loadCustomNames();
    if (name && name.trim()) {
        names[req.params.filename] = name.trim();
    } else {
        delete names[req.params.filename]; // empty = reset to original
    }
    saveCustomNames(names);
    res.json({ success: true });
});

// API: Upload an exam file
app.post('/api/exams/upload', express.text({ limit: '50mb' }), (req, res) => {
    const { filename, content } = JSON.parse(req.body);
    if (!filename || !content) {
        return res.status(400).json({ error: 'filename and content required' });
    }
    const safeName = filename.replace(/[^a-zA-Z0-9_\-\.]/g, '_');
    const filePath = path.join(EXAMS_DIR, safeName.endsWith('.md') ? safeName : safeName + '.md');
    fs.writeFileSync(filePath, content);
    res.json({ success: true, filename: path.basename(filePath) });
});

// API: List available providers
app.get('/api/providers', (req, res) => {
    const providers = [
        { id: 'amazon', name: 'Amazon (AWS)', description: 'AWS Certifications' },
        { id: 'hashicorp', name: 'HashiCorp (Terraform)', description: 'Terraform, Vault, Consul' },
        { id: 'google', name: 'Google Cloud', description: 'GCP Certifications' },
        { id: 'microsoft', name: 'Microsoft', description: 'Azure, M365, etc.' },
        { id: 'anthropic', name: 'Anthropic', description: 'Claude Certifications' },
        { id: 'nvidia', name: 'NVIDIA', description: 'NCA, NCP (AI/GenAI)' },
        { id: 'databricks', name: 'Databricks', description: 'Data Engineer, Data Analyst, etc.' },
        { id: 'snowflake', name: 'Snowflake', description: 'SnowPro Certifications' },
        { id: 'cisco', name: 'Cisco', description: 'CCNA, CCNP, etc.' },
        { id: 'comptia', name: 'CompTIA', description: 'A+, Security+, Network+, etc.' },
        { id: 'isc2', name: 'ISC2', description: 'CISSP, CCSP, etc.' },
        { id: 'salesforce', name: 'Salesforce', description: 'Salesforce Certs' },
        { id: 'fortinet', name: 'Fortinet', description: 'NSE Certifications' },
        { id: 'juniper', name: 'Juniper', description: 'JNCIA, JNCIS, etc.' },
        { id: 'isaca', name: 'ISACA', description: 'CISA, CISM, etc.' },
        { id: 'vmware', name: 'VMware', description: 'VCP, VCAP, etc.' },
        { id: 'servicenow', name: 'ServiceNow', description: 'ServiceNow Certs' },
        { id: 'ec-council', name: 'EC-Council', description: 'CEH, etc.' },
        { id: 'oracle', name: 'Oracle', description: 'OCA, OCP, etc.' },
        { id: 'paloaltonetworks', name: 'Palo Alto Networks', description: 'PCNSA, PCNSE, etc.' },
    ];
    res.json({ providers });
});

// API: List available exams for a provider (runs docker quickly)
app.get('/api/providers/:id/exams', async (req, res) => {
    const provider = req.params.id;
    if (!PROVIDERS.some(p=>p.id===provider)) return res.status(400).json({error:'Catégorie inconnue'});
    try {res.json({provider,exams:await catalog(provider)});}
    catch(err){res.status(502).json({error:err.message});}
});

// API: Get exam info (last update date) by scraping the exam page
app.get('/api/providers/:id/exams/:slug/info', async (req, res) => {
    const { id: provider, slug } = req.params;
    const url = `https://www.examtopics.com/exams/${provider}/${slug}/`;
    
    try {
        const https = require('https');
        const html = await new Promise((resolve, reject) => {
            https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
                let data = '';
                response.on('data', chunk => data += chunk);
                response.on('end', () => resolve(data));
            }).on('error', reject);
        });
        
        // Try to find last updated date in the page
        const dateMatch = html.match(/Last Updated[:\s]*<[^>]*>([^<]+)</i) ||
                          html.match(/Updated[:\s]*([A-Z][a-z]+ \d+,? \d{4})/i) ||
                          html.match(/"dateModified"\s*:\s*"([^"]+)"/i) ||
                          html.match(/(\w+ \d+, \d{4})\s*<\/span>/);
        
        // Try to find question count
        const countMatch = html.match(/(\d+)\s*Questions/i);
        
        const lastUpdated = dateMatch ? dateMatch[1].trim() : null;
        const questionCount = countMatch ? parseInt(countMatch[1]) : null;
        
        res.json({ provider, slug, lastUpdated, questionCount, url });
    } catch (err) {
        res.json({ provider, slug, lastUpdated: null, questionCount: null, url, error: err.message });
    }
});

const jobs=new Map();
let forumQueue = Promise.resolve();
app.post('/api/download',(req,res)=>{
    const {provider,search}=req.body;
    if (!PROVIDERS.some(p=>p.id===provider) || typeof search!=='string' || !/^[a-z0-9-]{1,180}$/.test(search))
        return res.status(400).json({error:'Examen inconnu'});
    const name=provider+'/'+search;
    if(jobs.get(name)?.running) return res.json({status:'started'});
    const job={name,examName:name,stepLabel:'En attente du downloader',running:true,logLines:[]};
    jobs.set(name,job);
    res.json({status:'started'});
    forumQueue = forumQueue.then(async () => {
        job.stepLabel = 'Préparation du downloader';
        try {
            const count = await downloadForum(EXAMS_DIR, provider, search, job);
            job.result = count + ' questions enregistrées';
            if (job.missingAnswers) job.result += ' · ' + job.missingAnswers + ' sans corrigé disponible';
        } catch (err) {
            job.result = job.stepLabel + ' · ' + err.message;
        } finally {
            job.running = false;
        }
        await new Promise(resolve => setTimeout(resolve, 3000));
    });
});
app.get('/api/download/status',(req,res)=>{
    const all=[...jobs.values()];
    const downloads=all.filter(j=>j.running);
    res.json({downloading:downloads.length>0,downloads,results:all.filter(j=>!j.running).map(j=>j.name+' · '+j.result)});
});

// Start server
app.listen(PORT, () => {
    console.log(`\n  🎓 Quizzs`);
    console.log(`  ─────────────────────`);
    console.log(`  → http://localhost:${PORT}\n`);
    console.log(`  Exams stockés dans: ${EXAMS_DIR}`);
    console.log(`  ${fs.readdirSync(EXAMS_DIR).filter(f => f.endsWith('.md')).length} exam(s) disponible(s)\n`);
});

