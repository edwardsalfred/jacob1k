const fs = require('fs');
const html = fs.readFileSync('src/App.tsx', 'utf-8');
const regex = /href="[^"]*articles\/([^"]+)"/g;
let m;
while(m = regex.exec(html)) {
    console.log(`Matched at index ${m.index}: ${m[1]}`);
    // extract surrounding text
    const start = Math.max(0, m.index - 200);
    const end = Math.min(html.length, m.index + 200);
    console.log(html.substring(start, end));
    console.log('---------------------------------');
}
