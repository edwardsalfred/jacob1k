import fs from 'fs';

const tsx = fs.readFileSync('./src/App.tsx', 'utf8');

const regex = /<h(?:2|3)[^>]*>(.*?)<\/h(?:2|3)>/gs;
let match;
const headings = new Set();
while ((match = regex.exec(tsx)) !== null) {
    let text = match[1].replace(/<[^>]+>/g, '').replace(/\{\/\*.*?\*\/\}/gs, '').trim();
    if (text) headings.add(text);
}

fs.writeFileSync('headings.txt', Array.from(headings).join('\n'), 'utf8');
console.log('Done');
