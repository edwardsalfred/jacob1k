import fs from 'fs';
let css = fs.readFileSync('src/index.css', 'utf8');

// The string in question from Framer is usually:
// var(var(--framer-code-font-family, var(--framer-font-family, "Inter", "Inter Placeholder", sans-serif)))
// We should replace var(var( with var( and shave off one closing bracket at the end.
css = css.replace(/var\(var\(--framer-code-font-family([^)]+)\)\)\)/g, 'var(--framer-code-font-family$1))');
css = css.replace(/var\(var\((.*?)\)\)\)/g, 'var($1))'); // Catch any others

// But just in case it doesn't match perfectly, let's aggressively strip the extra var( completely from ALL CSS variables that start with var(var(
let parts = css.split('var(var(');
if (parts.length > 1) {
    for (let i = 1; i < parts.length; i++) {
        let closeIndex = parts[i].lastIndexOf(')');
        if (closeIndex !== -1) {
            // we remove one `)`
            parts[i] = parts[i].slice(0, closeIndex) + parts[i].slice(closeIndex + 1);
        }
    }
}
let c2 = parts.join('var(');

fs.writeFileSync('src/index.css', c2, 'utf8');
console.log('index.css var() syntax fixed!');
