import { readFileSync, writeFileSync } from 'fs';

const filePath = './src/App.tsx';
let content = readFileSync(filePath, 'utf8');

// Remove all <script>...</script> blocks
content = content.replace(/<script[\s\S]*?<\/script>/gi, '');

// Fix <style>...</style> blocks by wrapping inner text in {`...`}
content = content.replace(/<style([^>]*)>([\s\S]*?)<\/style>/gi, (match, attrs, inner) => {
    // If it's already using dangerouslySetInnerHTML, skip it
    if (attrs.includes('dangerouslySetInnerHTML')) return match;
    
    // Check if inner already has {`
    if (inner.trim().startsWith('{`')) return match;
    
    // Wrap the inner text appropriately
    // But wait, the inner text might contain backticks. Let's just use dangerouslySetInnerHTML:
    return `<style${attrs} dangerouslySetInnerHTML={{ __html: \`${inner.replace(/`/g, '\\`')}\` }} />`;
});

writeFileSync(filePath, content, 'utf8');
console.log('Fixed scripts and styles');
