import { readFileSync, writeFileSync } from 'fs';

const filePath = './src/index.css';
let content = readFileSync(filePath, 'utf8');

// Replace common HTML entities that might appear in CSS
content = content.replace(/&#34;/g, '"');
content = content.replace(/&#39;/g, "'");
content = content.replace(/&quot;/g, '"');
content = content.replace(/&apos;/g, "'");
content = content.replace(/&gt;/g, '>');
content = content.replace(/&lt;/g, '<');
content = content.replace(/&amp;/g, '&');

writeFileSync(filePath, content, 'utf8');
console.log('Fixed CSS entities');
