import fs from 'fs';

let tsx = fs.readFileSync('./src/App.tsx', 'utf8');
const lines = tsx.split('\n');

// Lines 997 (0-indexed: 996) through 1213 (0-indexed: 1212) are the duplicate
// Video Editing, Music Videos, Social Media Marketing blocks (2nd set).
// We need to remove these lines.
// Line 997 is a blank line, line 998 starts the first duplicate ssr-variant.
// Line 1213 closes the last Social Media Marketing duplicate block.

// The Drone Videos block starts at line 1214 and should be kept.

const startRemove = 996; // 0-indexed line 997
const endRemove = 1213;  // 0-indexed line 1213 (inclusive)

// Verify the content at boundaries
console.log('Start of removal (line 997):', JSON.stringify(lines[996]));
console.log('Line 998:', lines[997] && lines[997].trim().substring(0, 60));
console.log('Line 1010:', lines[1009] && lines[1009].trim().substring(0, 60));
console.log('Line 1213:', lines[1212] && lines[1212].trim().substring(0, 60));
console.log('Line 1214 (should be Drone Videos ssr-variant):', lines[1213] && lines[1213].trim().substring(0, 60));

// Double-check: line 1010 should contain "Video Editing"
// Line 1213 should be a closing </div>
if (lines[1009] && lines[1009].includes('Video Editing') &&
    lines[1212] && lines[1212].trim() === '</div>') {
    
    // Remove lines 997-1213
    const newLines = [...lines.slice(0, startRemove), ...lines.slice(endRemove + 1)];
    fs.writeFileSync('./src/App.tsx', newLines.join('\n'), 'utf8');
    
    const removed = endRemove - startRemove + 1;
    console.log(`\nRemoved ${removed} lines (lines ${startRemove + 1} to ${endRemove + 1}).`);
    console.log('Total lines: ' + lines.length + ' -> ' + newLines.length);
    
    // Verify no remaining duplicates
    const newTsx = newLines.join('\n');
    const services = ['Video Editing','Music Videos','Social Media Marketing Videos','Podcast Editing','Drone Videos'];
    console.log('\nService counts after cleanup:');
    for (const svc of services) {
        const count = (newTsx.match(new RegExp(svc, 'g')) || []).length;
        console.log(`  ${svc}: ${count}`);
    }
} else {
    console.log('\nSafety check FAILED - not removing. Check line contents manually.');
    console.log('Line 1010 content:', lines[1009]);
    console.log('Line 1213 content:', lines[1212]);
}
