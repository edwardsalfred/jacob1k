const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf-8');

const regex = /<a[^>]*href=\"\.\/articles\/surviving-as-a-videographer-in-2026-crowded-market\"[^>]*>.*?<\/a>/gs;
c = c.replace(regex, (match) => {
    return match.replace(/srcset=\"https:\/\/framerusercontent\.com\/images\/1CUDXf05kZernaZGrd1fpbhYgdE\.png[^\"]*\"/g, 'srcset="/surviving-videographer.png"');
});

fs.writeFileSync('src/App.tsx', c);
console.log('Fixed srcset correctly inside Surviving as a Videographer blocks!');
