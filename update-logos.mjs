import fs from 'fs';

const tsxPath = './src/App.tsx';
let tsx = fs.readFileSync(tsxPath, 'utf8');

const newLogos = ['Adobe Premiere', 'CapCut', 'HeyGen', 'Claude', 'Nano Banana', 'VEO 3.1', 'Kling'];

const buildLis = () => {
    // Generate styled text items that look like a logo marquee
    const items = newLogos.map(name => 
      `<li style={{ flexShrink: 0, fontSize: '28px', fontWeight: '800', color: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, #999)', textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: 'system-ui, sans-serif' }}>${name}</li>`
    ).join('\n');
    
    // Duplicate for infinite scrolling
    return items + '\n' + items;
};

const rx = /<ul className="scrolling-logos"([^>]*)>[\s\S]*?<\/ul>/g;

let replaced = false;
tsx = tsx.replace(rx, (match, attrs) => {
    replaced = true;
    return `<ul className="scrolling-logos"${attrs}>\n${buildLis()}\n</ul>`;
});

if (!replaced) {
    console.error("Could not find the scrolling-logos block.");
    process.exit(1);
}

fs.writeFileSync(tsxPath, tsx, 'utf8');
console.log("Logos updated seamlessly.");
