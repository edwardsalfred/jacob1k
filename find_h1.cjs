const fs = require('fs');
const html = fs.readFileSync('src/App.tsx', 'utf-8');

const regex = /<h1[^>]*>([^<]+)<\/h1>/g;
let m;
console.log("H1s:");
while(m = regex.exec(html)) {
    console.log(m[1].trim());
}

const regex2 = /<h2[^>]*>([^<]+)<\/h2>/g;
console.log("H2s:");
while(m = regex2.exec(html)) {
    console.log(m[1].trim());
}
