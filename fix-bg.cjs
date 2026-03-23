const fs = require('fs');
const path = require('path');

const files = [
  'ArticleSurvivingAsAVideographer.tsx',
  'ArticleShootMockumentaryVideos.tsx',
  'ArticleOverdoneVideographyTrends.tsx',
  'ArticleGettingIntoVideography.tsx',
  'ArticleDesigningForMotion.tsx',
  'Terms.tsx',
  'Privacy.tsx',
  'Contact.tsx'
];

files.forEach(f => {
  const p = path.join(__dirname, 'src', f);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/background:\s*'transparent'/, "background: '#000'");
    fs.writeFileSync(p, content);
  }
});
console.log('Done!');
