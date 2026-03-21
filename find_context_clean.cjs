const fs = require('fs');
const html = fs.readFileSync('src/App.tsx', 'utf-8');
const regex = /href="[^"]*articles\/([^"]+)"/g;
let m;
let out = '';
while(m = regex.exec(html)) {
    out += `Mathced: ${m[1]}\n`;
    out += '---------------------------------\n';
}
fs.writeFileSync('matches.txt', out);
