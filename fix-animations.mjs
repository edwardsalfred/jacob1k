import fs from 'fs';

const tsxPath = './src/App.tsx';
let tsx = fs.readFileSync(tsxPath, 'utf8');

const cssPath = './src/index.css';
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Fix Background Animation
const bgRegex = /<div style=\{\{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: 'url\(https:\/\/framerusercontent\.com\/images\/7VWE9jkZntgEWY4jiS77lMqKI\.png\)',[^>]+><\/div>\s*<div style=\{\{position: 'absolute'[^>]+><\/div>/g;

tsx = tsx.replace(bgRegex, (match) => {
    return `<div className="animated-bg" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: 'url(https://framerusercontent.com/images/7VWE9jkZntgEWY4jiS77lMqKI.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8}}></div>`;
});

if (!css.includes('.animated-bg')) {
    css += `
.animated-bg {
    animation: panBg 30s linear infinite alternate;
}

@keyframes panBg {
    0% { transform: scale(1.05); background-position: 0% 50%; opacity: 0.6; filter: brightness(0.8) contrast(1.2); }
    100% { transform: scale(1.15); background-position: 100% 50%; opacity: 0.9; filter: brightness(1.2) contrast(1.5); }
}
`;
}

// 2. Fix Scrolling Logos
const sectionRegex = /<section style=\{\{display: 'flex', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: '0', padding: '0px', listStyleType: 'none', textIndent: 'none', opacity: '0',/g;

tsx = tsx.replace(sectionRegex, `<section style={{display: 'flex', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: '0', padding: '0px', listStyleType: 'none', textIndent: 'none', opacity: '1',`);

const ulRegex = /<ul style=\{\{display: 'flex', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: '0', padding: '0', listStyleType: 'none', textIndent: 'none', gap: '60px', position: 'relative', flexDirection: 'row', willChange: 'auto', transform: 'translateX\(-0px\)'\}\}>([\s\S]*?)<\/ul>/g;

tsx = tsx.replace(ulRegex, (match, innerLis) => {
    // Duplicate the LIs to make the scroll seamless
    return `<ul className="scrolling-logos" style={{display: 'flex', placeItems: 'center', margin: '0', padding: '0', listStyleType: 'none', gap: '60px', flexDirection: 'row', willChange: 'transform' }}>
        ${innerLis}
        ${innerLis}
    </ul>`;
});

if (!css.includes('.scrolling-logos')) {
    css += `
.scrolling-logos {
    animation: scrollMarquee 15s linear infinite;
    min-width: max-content;
}

@keyframes scrollMarquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-50% - 30px)); }
}
`;
}

fs.writeFileSync(tsxPath, tsx, 'utf8');
fs.writeFileSync(cssPath, css, 'utf8');

console.log("Animations updated safely!");
