import fs from 'fs';

let tsx = fs.readFileSync('./src/App.tsx', 'utf8');

// The original services are:
// "Web Design"
// "Front-end Development"  
// "CMS Integrations"
// "SEO &amp; Performance"

// The user wants: "Video Editing", "Music Videos", "Social Media Marketing Videos", "Podcast Editing", "Drone Videos"

// Framer formats these inside <div data-framer-name="Service"...>
// Let's find all the Service blocks.
const serviceRegex = /<div className="framer-[a-zA-Z0-9]+" data-framer-name="Service"[\s\S]*?<\/a>\s*<\/div>\s*<\/div>/g;
// Wait, a better way is to just find the text and replace it, but we need descriptions too.
// Let's replace the texts directly using somewhat flexible replacement:

const replacements = [
  {
    oldTitle: /Web[\s\S]*?Design/, 
    newTitle: 'Video Editing', 
    oldDesc: /I design gorgeous[\s\S]*?beautiful/, 
    newDesc: 'High-quality, dynamic video editing tailored to engage your audience and tell your brand story.'
  },
  {
    oldTitle: /Front-end[\s\S]*?Development/, 
    newTitle: 'Music Videos', 
    oldDesc: /I build fast[\s\S]*?performant/, 
    newDesc: 'Creative and industry-standard music video production and editing to bring your artistic vision to life.'
  },
  {
    oldTitle: /CMS[\s\S]*?Integrations/, 
    newTitle: 'Social Media Marketing Videos', 
    oldDesc: /I integrate powerful[\s\S]*?easy/, 
    newDesc: 'Short-form, high-retention video content optimized for TikTok, Instagram Reels, and YouTube Shorts.'
  },
  {
    oldTitle: /SEO[\s\S]*?&amp;[\s\S]*?Performance/, 
    newTitle: 'Podcast Editing', 
    oldDesc: /I optimize your[\s\S]*?rank/, 
    newDesc: 'Professional multi-cam podcast editing, audio cleanup, and clipping for promotional use.'
  }
];

let currentIndex = 0;
// Actually, using regexes for old titles might be tricky if the DOM structure is very deep.
// Let's find the individual text strings in the JSX.
// We know Framer exports text tightly coupled to the span/p tags.

tsx = tsx.replace(/>\s*Web\s*</g, '>Video <').replace(/>\s*Design\s*</g, '>Editing<');
// Replaces "Web Design" -> "Video Editing"

// Frontend Development
tsx = tsx.replace(/>\s*Front-end\s*</g, '>Music <').replace(/>\s*Development\s*</g, '>Videos<');

// CMS Integrations
tsx = tsx.replace(/>\s*CMS\s*</g, '>Social Media <').replace(/>\s*Integrations\s*</g, '>Marketing Videos<');

// SEO & Performance
tsx = tsx.replace(/>\s*SEO\s*</g, '>Podcast <').replace(/>\s*&amp;\s*</g, '><').replace(/>\s*Performance\s*</g, '>Editing<');

// Descriptions:
// Find the <p> tags with the preset styles.
// In dominicus, the service descriptions are long paragraphs. I'll just write a regex to find them.
const descRegex = /<p[^>]*class(?:Name)?="framer-text[^>]*>([\s\S]*?)<\/p>/g;
let matchCount = 0;
// The first few <p> might be in the hero. Let's just do a manual string replace of the known descriptions.
// If I can't find the exact strings, I need to read App.tsx and find them.
