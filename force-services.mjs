import fs from 'fs';

let tsx = fs.readFileSync('./src/App.tsx', 'utf8');

// Instead of string matching which is failing due to invisible JSX/Framer spans,
// Let's match the known header structure `className="framer-text framer-styles-preset-mgnp7g"`
// The first 3 of these are Web Design, next 3 are Front-end, next 3 are CMS, next 3 are SEO.
// Total 12 service titles (3 variants * 4 services).
// 
// Let's replace the inner HTML of these h3s directly!

let titleIndex = 0;
// We will replace the contents of `<h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE"> ... </h3>`
const titleRegex = /(<h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">)([\s\S]*?)<\/h3>/g;

const newTitles = [
    'Video Editing', 'Video Editing', 'Video Editing',
    'Music Videos', 'Music Videos', 'Music Videos',
    'Social Media Marketing Videos', 'Social Media Marketing Videos', 'Social Media Marketing Videos',
    'Podcast Editing', 'Podcast Editing', 'Podcast Editing'
];

tsx = tsx.replace(titleRegex, (match, p1, p2) => {
    // Only the first 12 are services. There might be other h3s with this preset? Let's check.
    // Actually, dominicus uses this preset for all h3s probably.
    // Wait, let's only replace the ones we know are services.
    if (titleIndex < 12) {
        let replacement = `${p1}\n                            ${newTitles[titleIndex]}\n                          </h3>`;
        titleIndex++;
        return replacement;
    }
    return match;
});

// Same for descriptions!
// Descriptions are in `<p className="framer-text framer-styles-preset-h71jo3"`
let descIndex = 0;
const descRegex = /(<p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style=\{{'--framer-text-alignment': 'left'\}}>)([\s\S]*?)<\/p>/g;

const newDescs = [
    'High-quality, dynamic video editing tailored to engage your audience and tell your brand story.',
    'Creative and industry-standard music video production and editing to bring your artistic vision to life.',
    'Short-form, high-retention video content optimized for TikTok, Instagram Reels, and YouTube Shorts.',
    'Professional multi-cam podcast editing, audio cleanup, and clipping for promotional use.'
];
const expandedDescs = [];
for (let d of newDescs) { expandedDescs.push(d); expandedDescs.push(d); expandedDescs.push(d); }

tsx = tsx.replace(descRegex, (match, p1, p2) => {
    if (descIndex < 12) {
        let replacement = `${p1}\n                            ${expandedDescs[descIndex]}\n                          </p>`;
        descIndex++;
        return replacement;
    }
    return match;
});

// Now for the 5th service ("Drone Videos")
// The 4th service is "Podcast Editing".
// Let's use string manipulation to duplicate the 4th service block.
// The 4th service takes up 3 SSR variants ending right before `<div className="framer-12n0z11" data-framer-name="Projects"`
// or some wrapper. Let's just do a large string match.
const cloneRegex = /(<div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">\s*<div className="framer-[a-zA-Z0-9]+-container">\s*<div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7"[\s\S]*?Podcast Editing[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div className="ssr-variant hidden-f2wq4l hidden-72rtr7">[\s\S]*?Podcast Editing[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">[\s\S]*?Podcast Editing[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/g;

tsx = tsx.replace(cloneRegex, (match) => {
    return match + '\n' + match.replaceAll('Podcast Editing', 'Drone Videos').replaceAll('Professional multi-cam podcast editing, audio cleanup, and clipping for promotional use.', 'Breathtaking aerial cinematography that captures your projects, events, or real estate from an unforgettable perspective.');
});

fs.writeFileSync('./src/App.tsx', tsx, 'utf8');

console.log(`Replaced ${titleIndex} titles and ${descIndex} descriptions.`);
