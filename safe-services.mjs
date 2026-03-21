import fs from 'fs';

let tsx = fs.readFileSync('./src/App.tsx', 'utf8');

// 1. Replace the first 12 titles and descriptions.
let titleIndex = 0;
const titleRegex = /(<h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">)([\s\S]*?)<\/h3>/g;
const newTitles = [
    'Video Editing', 'Video Editing', 'Video Editing',
    'Music Videos', 'Music Videos', 'Music Videos',
    'Social Media Marketing Videos', 'Social Media Marketing Videos', 'Social Media Marketing Videos',
    'Podcast Editing', 'Podcast Editing', 'Podcast Editing'
];

tsx = tsx.replace(titleRegex, (match, p1, p2) => {
    if (titleIndex < 12) {
        let replacement = `${p1}\n                            ${newTitles[titleIndex]}\n                          </h3>`;
        titleIndex++;
        return replacement;
    }
    return match;
});

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

// 2. Safely add the 5th service "Drone Videos" right before the Projects section opens.
const droneService = `
                <div className="ssr-variant" style={{ width: '100%', height: '100%' }}>
                  <div className="framer-drone-service-container" style={{ display: 'flex', flexDirection: 'column', padding: '40px', backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderRadius: '12px', width: '100%', height: '100%', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))' }}>
                    <div style={{ paddingBottom: '20px' }}><svg viewBox="0 0 24 24" fill="none" width="24" height="24" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L20 8L12 14L4 8L12 2Z"></path><path d="M4 14L12 20L20 14"></path></svg></div>
                    <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE" style={{ marginBottom: '10px' }}>Drone Videos</h3>
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left', color: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, #999)', lineHeight: '1.6'}}>Breathtaking aerial cinematography that captures your projects, events, or real estate from an unforgettable perspective.</p>
                  </div>
                </div>
`;

// Insert it before </section>
const insertTarget = /<\/section>\s*<section className="framer-x1dgnz" data-framer-name="projects">/;
tsx = tsx.replace(insertTarget, (m) => `\n              ${droneService}\n            ${m}`);

fs.writeFileSync('./src/App.tsx', tsx, 'utf8');
console.log('App.tsx restored and safe DOM injection applied.');
