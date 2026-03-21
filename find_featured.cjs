const fs = require('fs');
const html = fs.readFileSync('src/App.tsx', 'utf-8');
const regex = /href="[^"]*articles\/([^"]+)"/g;
let m;
const set = new Set();
while(m = regex.exec(html)) set.add(m[1]);

console.log("Articles in App.tsx: ", Array.from(set));
