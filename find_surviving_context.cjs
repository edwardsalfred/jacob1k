const fs = require('fs');
const html = fs.readFileSync('src/App.tsx', 'utf-8');
const index = html.indexOf('Surviving as a Videographer');
if (index !== -1) {
    console.log(html.substring(index, index + 1000));
} else {
    console.log('Not found');
}
