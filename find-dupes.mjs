import fs from 'fs';
const tsx = fs.readFileSync('./src/App.tsx', 'utf8');
const lines = tsx.split('\n');

// Find line numbers of each service mention
const services = ['Video Editing', 'Music Videos', 'Social Media Marketing Videos', 'Podcast Editing', 'Drone Videos'];
for (const svc of services) {
    const lineNums = [];
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(svc)) {
            lineNums.push(i + 1);
        }
    }
    console.log(`${svc}: lines ${lineNums.join(', ')}`);
}

// Find ssr-variant blocks with their line numbers
console.log('\n--- SSR-VARIANT blocks ---');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('ssr-variant')) {
        const classMatch = lines[i].match(/className="([^"]+)"/);
        const cls = classMatch ? classMatch[1] : 'unknown';
        // Look ahead 30 lines for service name
        const lookahead = lines.slice(i, Math.min(i + 30, lines.length)).join(' ');
        let foundSvc = 'unknown';
        for (const svc of services) {
            if (lookahead.includes(svc)) {
                foundSvc = svc;
                break;
            }
        }
        console.log(`Line ${i + 1}: [${cls}] -> ${foundSvc}`);
    }
}
