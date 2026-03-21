import fs from 'fs';

let tsx = fs.readFileSync('./src/App.tsx', 'utf8');

// Replace all Privacy links (anchor tags pointing to ./privacy) with Link to="/privacy"
// There are 3 footer variants (Desktop, Tablet, Mobile) with identical patterns

// Update Privacy links: change <a href="./privacy"> to <Link to="/privacy">
tsx = tsx.replace(
  /(<a className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" href="\.\/(privacy)")(>[\s]*)(Privacy[\s]*\n<\/a>)/g,
  (match, prefix, middle, suffix) => {
    return `<Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/privacy"${middle}Privacy\n</Link>`;
  }
);

// Update Cookies links: change <a href="./cookies"> to <Link to="/terms"> and text to "Terms"
tsx = tsx.replace(
  /(<a className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" href="\.\/cookies")(>[\s]*)(Cookies[\s]*\n<\/a>)/g,
  (match, prefix, middle, suffix) => {
    return `<Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/terms"${middle}Terms\n</Link>`;
  }
);

fs.writeFileSync('./src/App.tsx', tsx, 'utf8');

// Verify
const result = fs.readFileSync('./src/App.tsx', 'utf8');
const privacyLinks = (result.match(/to="\/privacy"/g) || []).length;
const termsLinks = (result.match(/to="\/terms"/g) || []).length;
const oldCookies = (result.match(/href="\.\/cookies"/g) || []).length;
const oldPrivacy = (result.match(/href="\.\/privacy"/g) || []).length;

console.log('Privacy Link count:', privacyLinks);
console.log('Terms Link count:', termsLinks);
console.log('Old cookies href remaining:', oldCookies);
console.log('Old privacy href remaining:', oldPrivacy);
