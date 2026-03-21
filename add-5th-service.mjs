import fs from 'fs';

let tsx = fs.readFileSync('./src/App.tsx', 'utf8');

// The 4th service is "Podcast Editing".
// Let's find the chunks of `<div className="ssr-variant` that contain "Podcast Editing".
const pieces = tsx.split('<div className="ssr-variant ');

// We want to find pieces that contain "Podcast Editing".
// Each piece starts right after `<div className="ssr-variant `
let dronePieces = [];

for (let i = 0; i < pieces.length; i++) {
    if (pieces[i].includes('Podcast Editing')) {
        // This is a piece we want to duplicate!
        let clone = pieces[i]
            .replace('Podcast Editing', 'Drone Videos')
            .replace('Professional multi-cam podcast editing, audio cleanup, and clipping for promotional use.', 'Breathtaking aerial cinematography that captures your projects, events, or real estate from an unforgettable perspective.');
        dronePieces.push({ index: i, text: clone });
    }
}

console.log(`Found ${dronePieces.length} variants of Podcast Editing.`);

if (dronePieces.length > 0) {
    // We want to inject the cloned pieces right after the last "Podcast Editing" piece.
    // The last piece is `dronePieces[dronePieces.length - 1].index`
    // However, `pieces[i]` is just the inner part of `<div className="ssr-variant `,
    // It goes all the way until the NEXT `<div className="ssr-variant `.
    // Wait... if it goes to the NEXT one, does it contain the closing tags of the parent wrapper if it's the last one?
    // Let's check if the last "Podcast Editing" piece contains `data-framer-name="Projects"`.
    let lastIndex = dronePieces[dronePieces.length - 1].index;
    if (pieces[lastIndex].includes('Projects') || pieces[lastIndex].includes('framer-12n0z11')) {
        // Yes, the last piece contains the transition to the next section!
        // We only want to duplicate the service block part of it.
        // A service block ends with `</div>\n                </div>\n` (2 closures usually, because `ssr-variant` and its immediate child).
        // Let's split by that boundary.
    }
}

// Actually, an even SAFER way to add the 5th service in React without breaking complex Framer DOM:
// In `App.tsx`, find the last `Podcast Editing` variant, and find where it ends.
// Let's use a regex to capture exactly the `ssr-variant` blocks for Podcast Editing.
// The ssr-variant for that has distinct visibility classes.
// There are 3 classes: "hidden-1dy4dcp hidden-f2wq4l", "hidden-f2wq4l hidden-72rtr7", "hidden-1dy4dcp hidden-72rtr7".
const re1 = /(<div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">[\s\S]*?Podcast Editing[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/;
const re2 = /(<div className="ssr-variant hidden-f2wq4l hidden-72rtr7">[\s\S]*?Podcast Editing[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/;
const re3 = /(<div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">[\s\S]*?Podcast Editing[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/;

// Let's just find "Podcast Editing" and inject the Drone Videos block!
// Since we don't strictly need 3 ssr-variants if we just make one universal block without `hidden-...` classes.
// Yes! For the 5th service, we can just inject ONE universal `<div style={{...}}>...</div>` that is visible everywhere!
// Let's extract the inner content of the first "Podcast Editing" block, remove the `ssr-variant` wrapper,
// and append it right before the wrapper closes.

// 1. Find the inner container of the first Podcast Editing block.
const innerRe = /<div className="framer-[a-zA-Z0-9]+-container">\s*(<div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7"[\s\S]*?Podcast Editing[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/;
const match = tsx.match(innerRe);

if (match) {
    let droneHtml = match[1]
        .replace('Podcast Editing', 'Drone Videos')
        .replace('Professional multi-cam podcast editing, audio cleanup, and clipping for promotional use.', 'Breathtaking aerial cinematography that captures your projects, events, or real estate from an unforgettable perspective.');
    
    // We have the droneHtml block. It is a `<div className="framer-R3Cyr...` block.
    // In Framer, these blocks are wrapped in a container. Let's wrap it in a universal container.
    droneHtml = `\n                <div className="ssr-variant">\n                  <div className="framer-drone-container">\n                    ${droneHtml}\n                  </div>\n                </div>\n              `;
    
    // Now, where to inject it?
    // Inject it exactly after the LAST `Podcast Editing` variant.
    // Find the string for the 3rd variant containing Podcast Editing, and its closing tags.
    const lastVariantRe = /(<div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">[\s\S]*?Podcast Editing[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/;
    
    tsx = tsx.replace(lastVariantRe, (m) => m + droneHtml);
    
    fs.writeFileSync('./src/App.tsx', tsx, 'utf8');
    console.log("5th block appended.");
} else {
    console.log("Could not find inner block for 5th block appended.");
}
