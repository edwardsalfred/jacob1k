import fs from 'fs';

let tsx = fs.readFileSync('./src/App.tsx', 'utf8');

// The targeted strings inside the SSR variants:
// 1. Web Design
// "Designing stylish, user-centric layouts that embody your brand and guide visitors smoothly."
// 2. Front-end Development
// "Building accessible React interfaces with Tailwind to deliver fluid visuals on each device."
// 3. CMS Integrations
// "Integrating Framer CMS or WordPress, enabling content updates fast through a visual editor."
// 4. SEO & Performance
// "Optimizing underlying page structures and assets to ensure fast loads and strong search rankings." (Assuming it resembles this)

// First, let's clone the 3rd service blocks to make a 5th service placeholder.
// The 3rd service is CMS Integrations.
const regexFindCMS = /(<div className="ssr-variant[^>]+>\s*<div className="framer-1gqp7gv-container">[\s\S]*?CMS Integrations[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/g;
// Actually, extracting proper blocks with regex without matching too much is hard.

// Since the whole structure is huge, let's just do exact string replacements on the known texts,
// and to add the 5th service, we can do it later if needed, but it's much safer to just inject it.
// Let's use simple global replaces for the text elements:

// 1. Web Design -> Video Editing
tsx = tsx.replaceAll('Web Design', 'Video Editing');
tsx = tsx.replaceAll('Designing stylish, user-centric layouts that embody your brand and guide visitors smoothly.', 'High-quality, dynamic video editing tailored to engage your audience and tell your brand story.');

// 2. Front-end Development -> Music Videos
tsx = tsx.replaceAll('Front-end Development', 'Music Videos');
tsx = tsx.replaceAll('Building accessible React interfaces with Tailwind to deliver fluid visuals on each device.', 'Creative and industry-standard music video production and editing to bring your artistic vision to life.');

// 3. CMS Integrations -> Social Media Marketing Videos
tsx = tsx.replaceAll('CMS Integrations', 'Social Media Marketing Videos');
tsx = tsx.replaceAll('Integrating Framer CMS or WordPress, enabling content updates fast through a visual editor.', 'Short-form, high-retention video content optimized for TikTok, Instagram Reels, and YouTube Shorts.');

// 4. SEO & Performance (assuming it's SEO &amp; Performance in JSX)
tsx = tsx.replaceAll('SEO &amp; Performance', 'Podcast Editing');
// Let's find the text for SEO & Performance just in case. It's probably related to optimizing page structures.
// A simpler way: Find all text contents in <p> following "Podcast Editing".
// Wait, regex might be safer to replace the description of the 4th service:
tsx = tsx.replace(/(<h3[^>]*>\s*Podcast Editing\s*<\/h3>[\s\S]*?<p[^>]*>)\s*([^<]+)\s*(<\/p>)/g, '$1Professional multi-cam podcast editing, audio cleanup, and clipping for promotional use.$3');

// Now, we need the 5th service! Drone Videos.
// Let's clone the complete text block of the 4th service, but change "Podcast Editing" to "Drone Videos" 
// This is somewhat tricky because of missing component boundaries.
// How about we find the parent container `<div className="framer-kkeui1" data-framer-name="wrapper">`
// and duplicate one of its inner items? Wait, the inner items are `ssr-variant`.
// A 5th service needs 3 `ssr-variant` blocks.
// Let's match all 3 variants of the first service (Video Editing) and append them to the end of the wrapper.

const firstServiceVariantsRegex = /<div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">\s*<div className="framer-79def1-container">[\s\S]*?<div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">\s*<div className="framer-79def1-container">[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/;

// Better approach to duplicate block:
// Use an index offset to capture the entire string between the start of CMS Integration and SEO Integration.
const startStr = `<div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">\n                  <div className="framer-1gqp7gv-container">`;

const parts = tsx.split(startStr);
if (parts.length > 1) {
    // The second part goes from the start of CMS Integrations to the end.
    // Let's just find the closing tags of the last variant of SEO & Performance.
    // Actually, maybe I can just ask the user if 4 services are okay, or just reliably inject a new DOM block.
    // To safely inject, I can inject right before the closing </div> of `framer-kkeui1 wrapper`.
    
    // I will extract the "Video Editing" blocks by splitting on `<div className="ssr-variant`
    // No, a simpler way is to match the entire 3-variant group for CMS Integration.
}

// Since manipulating 50 lines of complex nested DOM via regex is fragile, let's just use string parsing.
let out = '';
let foundCMS = false;
let cmsBlock = '';
// Let's try matching a single variant and cloning it 3 times with different visibility classes.
const variantRegex = /(<div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">\s*<div className="framer-1gqp7gv-container">[\s\S]*?<\/h3>\s*<\/div>\s*<div[^>]+>\s*<p[^>]+>)([\s\S]*?)(<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/g;

let match;
let variantsToInject = [];
while ((match = variantRegex.exec(tsx)) !== null) {
    if (match[0].includes('Social Media Marketing Videos')) {
       // This is the CMS Integrations variant.
       // Let's clone the structure for all 3 variants of it.
       // Actually, the regex above only matches the `hidden-1dy4dcp hidden-f2wq4l` variant!
    }
}

// Let's use a simpler token injection.
// I'll grab all text after line 1055, and manually define the 5th block and append it.
// I will just read the TSX, duplicate `ssr-variant` blocks that contain `Social Media Marketing Videos`, 
// replace with `Drone Videos`, and append them before the `framer-12n0z11` container.

const partsSplits = tsx.split('<div className="framer-12n0z11" data-framer-name="Projects"');
if (partsSplits.length === 2) {
    // Inside partsSplits[0], find the last instance of `</div>` that closes the wrapper
    // There are 3 ssr-variants for SEO & Performance right before it.
    
    // Let's just capture the last 3 ssr-variants
    const variantsMatch = partsSplits[0].match(/(<div className="ssr-variant[^>]+>[\s\S]*?)(?=\s*<\/div>\s*<\/div>\s*<\/div>\s*$)/);
    // This is getting too complex. Let's just create a generic component block.
}

fs.writeFileSync('./src/App.tsx', tsx, 'utf8');

console.log('Descriptions updated for first 4. Adding 5th is pending.');
