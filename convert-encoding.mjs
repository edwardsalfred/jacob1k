import fs from 'fs';
const text = fs.readFileSync('build_errors.txt', 'utf16le');
fs.writeFileSync('build_errors_utf8.txt', text, 'utf8');
