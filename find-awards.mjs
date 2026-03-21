import fs from 'fs';
const text = fs.readFileSync('src/App.tsx', 'utf8');
const rx = /awards?/i;
const match = rx.exec(text);
if(match) {
    const s = Math.max(0, match.index - 800);
    const e = Math.min(text.length, match.index + 800);
    fs.writeFileSync('awards-context.txt', text.substring(s, e));
    console.log('Wrote to awards-context.txt');
} else {
    fs.writeFileSync('awards-context.txt', 'Not found');
}
