import fs from 'fs';
const tsx = fs.readFileSync('./src/App.tsx', 'utf8');
const lines = tsx.split('\n');
const out = [];
for (let i = 700; i < 1500; i++) {
    if (lines[i] && lines[i].includes('ssr-variant')) {
        const cls = (lines[i].match(/className="([^"]+)"/)||[])[1]||'?';
        const la = lines.slice(i, i+25).join(' ');
        const svc = ['Video Editing','Music Videos','Social Media Marketing','Podcast Editing','Drone Videos'].find(s=>la.includes(s))||'?';
        out.push(`${i+1}: [${cls}] -> ${svc}`);
    }
}
fs.writeFileSync('dupes-report.txt', out.join('\n'), 'utf8');
console.log('Wrote ' + out.length + ' entries to dupes-report.txt');
