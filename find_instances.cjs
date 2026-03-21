const fs = require('fs');
const html = fs.readFileSync('src/App.tsx', 'utf-8');

const title = 'Surviving as a Videographer in 2026’s Crowded Market';
let idx = html.indexOf(title);
let count = 1;
while(idx !== -1) {
    console.log(`\n\n--- MATCH ${count} ---`);
    console.log(html.substring(idx - 150, idx + 400));
    idx = html.indexOf(title, idx + 1);
    count++;
}
