import fs from 'fs';

let tsx = fs.readFileSync('./src/App.tsx', 'utf8');

// 1. Simple regexes for the titles:
tsx = tsx.replace(/>\s*Web\s*Design\s*</g, '>Video Editing<');
tsx = tsx.replace(/>\s*Front-end\s*Development\s*</g, '>Music Videos<');
tsx = tsx.replace(/>\s*CMS\s*Integrations\s*</g, '>Social Media Marketing Videos<');
tsx = tsx.replace(/>\s*SEO\s*(?:&|&amp;)\s*Performance\s*</g, '>Podcast Editing<');

// 2. Simple regexes for the known descriptions:
tsx = tsx.replace(/>\s*Designing stylish, user-centric layouts that embody your brand and guide visitors smoothly\.\s*</g, '>High-quality, dynamic video editing tailored to engage your audience and tell your brand story.<');
tsx = tsx.replace(/>\s*Building accessible React interfaces with Tailwind to deliver fluid visuals on each device\.\s*</g, '>Creative and industry-standard music video production and editing to bring your artistic vision to life.<');
tsx = tsx.replace(/>\s*Integrating Framer CMS or WordPress, enabling content updates fast through a visual editor\.\s*</g, '>Short-form, high-retention video content optimized for TikTok, Instagram Reels, and YouTube Shorts.<');

// 3. For SEO & Performance, we don't know the exact description. Let's replace the <p> that follows "Podcast Editing".
// The string "Podcast Editing" was just injected!
const descRegex = /(<h3[^>]*>\s*Podcast Editing\s*<\/h3>[\s\S]*?<p[^>]*>)\s*([\s\S]*?)\s*(<\/p>)/g;
tsx = tsx.replace(descRegex, '$1Professional multi-cam podcast editing, audio cleanup, and clipping for promotional use.$3');

// 4. Duplicate the "Podcast Editing" service blocks to create the 5th service "Drone Videos":
// We need to match the entire wrapping container for the service.
// In the framer layout, these items are probably wrapped in `<div className="framer-..." data-framer-name="wrapper">`.
// But we saw the items are in `ssr-variant`.
// A clean way is to find the Grid/Flex container. 
// At line 1055, `<div className="framer-kkeui1" data-framer-name="wrapper">` starts the grid.
// Let's just find the closing tags of this grid, and inject a completely static hardcoded 5th service block.
// Or just inject another raw `<div>` with the styles of the others at the very end of the list!

// The class name for the item variant container is `framer-79def1-container`, `framer-zl6a7w-container`, etc.
// The easiest hook is just finding where the 4th item's container ends, or replace the entire `<div className="framer-kkeui1"...>` block!
// Since we don't have an AST, we'll just inject right before `<div className="framer-12n0z11" data-framer-name="Projects"`
// No, the services grid is wrapped.
// We'll leave the 5 services as-is for a moment, let's just make sure the 4 are replaced,
// then add the 5th into the layout.

// Wait, the grid (`framer-kkeui1`) might only accept 4 elements, or wrap. 
// If it wraps, we can just duplicate the whole 4th element's 3 variants.
const cloneTarget = /<div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">\s*<div className="framer-[a-zA-Z0-9]+-container">\s*<div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7"[\s\S]*?Podcast Editing[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div className="ssr-variant hidden-f2wq4l hidden-72rtr7">[\s\S]*?Podcast Editing[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">[\s\S]*?Podcast Editing[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;

tsx = tsx.replace(cloneTarget, (match) => {
    // Clone it!
    const cloned = match
        .replaceAll('Podcast Editing', 'Drone Videos')
        .replaceAll('Professional multi-cam podcast editing, audio cleanup, and clipping for promotional use.', 'Breathtaking aerial cinematography that captures your projects, events, or real estate from an unforgettable perspective.');
    return match + '\n' + cloned;
});

fs.writeFileSync('./src/App.tsx', tsx, 'utf8');
console.log('Services globally replaced in JSX.');
