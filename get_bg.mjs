import https from 'https';
import fs from 'fs';

https.get('https://dominicus.framer.website/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const results = {};
    
    const mp4Matches = data.match(/https:\/\/[^"']*\.mp4/g);
    if(mp4Matches) results.mp4 = [...new Set(mp4Matches)];

    const webmMatches = data.match(/https:\/\/[^"']*\.webm/g);
    if(webmMatches) results.webm = [...new Set(webmMatches)];

    // Any image that is likely a background
    const framerBackgroundStyles = data.match(/background-image:[^;]*url\(['"]?(https:\/\/[^'"\)]+)['"]?\)/gi);
    if(framerBackgroundStyles) results.backgroundStyles = [...new Set(framerBackgroundStyles)];
    
    // Check inside video tags
    const videoTags = data.match(/<video[^>]*>/g);
    if(videoTags) results.videoTags = videoTags;

    // framer image tags
    const imgTags = data.match(/<img[^>]*>/g);
    if(imgTags) results.imgTags = imgTags.slice(0, 15);

    fs.writeFileSync('bg_results.json', JSON.stringify(results, null, 2));
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
