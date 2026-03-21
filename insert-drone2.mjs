import fs from 'fs';

let tsx = fs.readFileSync('./src/App.tsx', 'utf8');

const innerRe = /<div className="framer-[a-zA-Z0-9]+-container">\s*(<div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7"[\s\S]*?Podcast Editing[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/;
const match = tsx.match(innerRe);

if (match) {
    let droneHtml = match[1]
        .replace('Podcast Editing', 'Drone Videos')
        .replace('Professional multi-cam podcast editing, audio cleanup, and clipping for promotional use.', 'Breathtaking aerial cinematography that captures your projects, events, or real estate from an unforgettable perspective.');
    
    // We want to insert droneHtml as a new ssr-variant right before the services section ends.
    // Let's wrap it
    let fullDroneBlock = `\n                <div className="ssr-variant">\n                  <div className="framer-13v92e8-container" style={{display: 'contents'}}>\n                    ${droneHtml}\n                  </div>\n                </div>\n`;

    const replaceTarget = `              </div>\n            </div>\n          </section>\n          <section className="framer-x1dgnz"`;
    
    // Check if it exists exactly
    if (tsx.includes(replaceTarget)) {
        tsx = tsx.replace(replaceTarget, fullDroneBlock + replaceTarget);
        fs.writeFileSync('./src/App.tsx', tsx, 'utf8');
        console.log("Drone videos added successfully!");
    } else {
        console.log("Could not find the exact replaceTarget. Will try regex fallback.");
        const regexStr = /              <\/div>\s*<\/div>\s*<\/section>\s*<section className="framer-x1dgnz"/;
        if(regexStr.test(tsx)){
           let result = tsx.replace(regexStr, fullDroneBlock + `              </div>\n            </div>\n          </section>\n          <section className="framer-x1dgnz"`);
           fs.writeFileSync('./src/App.tsx', result, 'utf8');
           console.log("Drone videos added successfully (fallback regex).");
        } else {
           console.log("Regex fallback also failed.");
        }
    }
} else {
    console.log("Could not extract Podcast Editing block.");
}
