const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf-8');

const regex = /srcset=\"https:\/\/framerusercontent\.com\/images\/1CUDXf05kZernaZGrd1fpbhYgdE\.png[^\"]*\"/g;

c = c.replace(regex, 'srcset="/surviving-videographer.png"');

fs.writeFileSync('src/App.tsx', c);
console.log('Fixed srcset images!');
