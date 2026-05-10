import https from 'https';

const urls = [
  "https://ibb.co/DHpQdZh4",
  "https://ibb.co/FqW3v456",
  "https://ibb.co/PsbGfQbv",
  "https://ibb.co/TBjZch2j",
  "https://ibb.co/Kz8vqPwZ",
  "https://ibb.co/qFrYYxfv",
  "https://ibb.co/WW7dMp5t",
  "https://ibb.co/tTB1Rmz3",
  "https://ibb.co/XxFQm22M",
  "https://ibb.co/QvKnzG9V",
  "https://ibb.co/fVQnZ7B6",
  "https://ibb.co/0jyycSWs",
  "https://ibb.co/WNNXmc3b",
  "https://ibb.co/rKvYZLcz",
  "https://ibb.co/LzgHHMv7",
  "https://ibb.co/57FCwyg",
  "https://ibb.co/gMkbKdLr",
  "https://ibb.co/gZFkCfJr",
  "https://ibb.co/fGNPZhKx",
  "https://ibb.co/CdMyJhF",
  "https://ibb.co/jBrSGn6",
  "https://ibb.co/1J0VhPHL"
];

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({url, data, status: res.statusCode, headers: res.headers}));
    }).on('error', reject);
  });
}

function extractDirectUrl(html) {
  const match = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
  return match ? match[1] : null;
}

async function main() {
  const results = {};
  for (const url of urls) {
    try {
      const res = await fetchUrl(url);
      const html = res.data;
      const direct = extractDirectUrl(html);
      results[url] = direct;
      console.log(`${url} -> ${direct}`);
    } catch (e) {
      console.error(`${url} -> ERROR: ${e.message}`);
    }
  }
}
main();
