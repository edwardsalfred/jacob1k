import fs from 'fs';

let tsx = fs.readFileSync('src/App.tsx', 'utf8');

const startIdx = tsx.indexOf('<section className="framer-fs61rl" data-framer-name="awards">');
if (startIdx !== -1) {
    // Find the next <section or <footer after startIdx
    let nextSectionIdx = tsx.indexOf('<section ', startIdx + 1);
    let footerIdx = tsx.indexOf('<footer ', startIdx + 1);
    let nextTagIdx = Math.min(
        nextSectionIdx !== -1 ? nextSectionIdx : Infinity,
        footerIdx !== -1 ? footerIdx : Infinity
    );

    // Now find the </section> just before that.
    if (nextTagIdx !== Infinity) {
        // Find the last </section> before the nextTagIdx
        let chunk = tsx.substring(startIdx, nextTagIdx);
        let endOfChunkIdx = chunk.lastIndexOf('</section>');
        if (endOfChunkIdx !== -1) {
            let actualEndIdx = startIdx + endOfChunkIdx + '</section>'.length;
            
            // Remove the section
            let before = tsx.substring(0, startIdx);
            let after = tsx.substring(actualEndIdx);
            
            fs.writeFileSync('src/App.tsx', before + after, 'utf8');
            console.log('Removed Awards section from index', startIdx, 'to', actualEndIdx);
        } else {
            console.log('Could not find closing </section>');
        }
    } else {
        console.log('Could not find next boundary tag.');
    }
} else {
    console.log('Awards section start tag not found.');
}
