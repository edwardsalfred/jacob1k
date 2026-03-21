import fs from 'fs';

let tsx = fs.readFileSync('./src/App.tsx', 'utf8');

// Fix the mangled privacy links - find all occurrences of the broken pattern
// Broken: to="/privacy"privacyPrivacy  (missing > and duplicate text)
// Fixed:  to="/privacy">                          Privacy

tsx = tsx.replace(
  /to="\/privacy"privacyPrivacy/g,
  'to="/privacy">                          Privacy'
);

// Also check if any Terms links are broken
const brokenTerms = (tsx.match(/to="\/terms"[^>]*Terms/g) || []);
console.log('Terms patterns found:', brokenTerms.map(t => JSON.stringify(t)));

fs.writeFileSync('./src/App.tsx', tsx, 'utf8');

// Verify all links
const result = fs.readFileSync('./src/App.tsx', 'utf8');
const lines = result.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('to="/privacy"') || lines[i].includes('to="/terms"')) {
    console.log((i+1) + ': ' + lines[i].trim().substring(0, 100));
  }
}
