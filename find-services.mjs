import fs from 'fs';

const tsx = fs.readFileSync('./src/App.tsx', 'utf8');

const regex = /<h(?:2|3)[^>]*>\s*([^<]+)\s*<\/h(?:2|3)>/g;
let match;
const headers = new Set();
while ((match = regex.exec(tsx)) !== null) {
    const text = match[1].trim();
    if (text && !text.includes('WEB DESIGNER')) {
        headers.add(text);
    }
}

console.log(Array.from(headers).slice(0, 30));
