const fs = require('fs');

let c = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace titles
c = c.replaceAll('Designing for Motion: How Micro-Animations Shape User Experience', 'Overdone Videography Trends You Should Ditch in 2026');

// Replace hrefs
c = c.replaceAll('href="./articles/designing-for-motion-how-micro-animations-shape-user-experience"', 'href="./articles/overdone-videography-trends-you-should-ditch-in-2026"');

// Replace image for this block ONLY.
const chunks = c.split('href="./articles/overdone-videography-trends-you-should-ditch-in-2026"');

// We have multiple instances of this link. For each matching chunk (from 1 to end), we replace the FIRST instance of the target image src+srcset with the new one.
const oldImgPart1 = 'src="https://framerusercontent.com/images/2XmQwKSaHgfErm1BpvZyUSJrgs.png"';
const oldImgPart2 = 'srcset="https://framerusercontent.com/images/2XmQwKSaHgfErm1BpvZyUSJrgs.png?scale-down-to=512 512w,https://framerusercontent.com/images/2XmQwKSaHgfErm1BpvZyUSJrgs.png 900w"';
const newImgPart1 = 'src="/videography-trends.png"';
const newImgPart2 = 'srcset="/videography-trends.png 512w, /videography-trends.png 900w"';

for (let i = 1; i < chunks.length; i++) {
   chunks[i] = chunks[i].replace(oldImgPart1, newImgPart1).replace(oldImgPart2, newImgPart2);
}

c = chunks.join('href="./articles/overdone-videography-trends-you-should-ditch-in-2026"');

fs.writeFileSync('src/App.tsx', c);
console.log('App.tsx updated!');
