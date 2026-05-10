import https from 'https';

const url = "https://ibb.co/SwxqRbcS";

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="og:image"\s+content="([^"]+)"/i) || data.match(/<link rel="image_src"\s+href="([^"]+)"/i);
    console.log(match ? match[1] : "not found: " + data.substring(0, 500));
  });
});
