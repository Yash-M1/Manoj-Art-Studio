import { Jimp } from 'jimp';

const urls = [
  "https://i.ibb.co/4gftyR8W/IMG-20260509-WA0002.jpg",
  "https://i.ibb.co/JWbjMQbw/IMG-20260509-WA0001.jpg",
  "https://i.ibb.co/XZ09XJL0/IMG-20260509-WA0003.jpg",
  "https://i.ibb.co/2Yp4t9N2/IMG-20260509-WA0004.jpg",
  "https://i.ibb.co/prLjjn8S/IMG-20260509-WA0005.jpg", // was sketch
  "https://i.ibb.co/bgYyCRmJ/IMG-20260509-WA0007.jpg",
  "https://i.ibb.co/B5LYkzGw/IMG-20260509-WA0006.jpg",
  "https://i.ibb.co/HTGSmFF3/IMG-20260509-WA0008.jpg",
  "https://i.ibb.co/23kPmBqr/IMG-20260509-WA0009.jpg",
  "https://i.ibb.co/JWCy8P06/IMG-20260509-WA0011.jpg",
  "https://i.ibb.co/GvQQ0L1H/IMG-20260509-WA0010.jpg",
  "https://i.ibb.co/cKK94NvG/IMG-20260509-WA0014.jpg",
  "https://i.ibb.co/RG7fCMBs/IMG-20260509-WA0013.jpg",
  "https://i.ibb.co/Z6g773ND/IMG-20260509-WA0012.jpg",
  "https://i.ibb.co/nWC4tvN/IMG-20260509-WA0015.jpg", // collage?
  "https://i.ibb.co/27G04S1F/IMG-20260509-WA0016.jpg", // leafArt -> was collage actually
  "https://i.ibb.co/PGzq8Pgr/IMG-20260509-WA0017.jpg",
  "https://i.ibb.co/DgMSmx6R/IMG-20260509-WA0020.jpg", // leaf?
  "https://i.ibb.co/msXKv67/IMG-20260509-WA0018.jpg",
  "https://i.ibb.co/VrqsDfj/IMG-20260509-WA0019.jpg",
  "https://i.ibb.co/Lh0wbc48/IMG-20260509-WA0021.jpg"
];

async function analyze() {
  for (const url of urls) {
    try {
      const img = await Jimp.read(url);
      img.resize({ w: 50, h: 50 }); // speed up processing
      
      let greenScore = 0;
      let grayScore = 0;
      let total = 0;
      
      img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        
        // Green dominance
        if (g > r + 10 && g > b + 10) greenScore++;
        
        // Grayscale similarity (sketch)
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        if (max - min < 20) grayScore++;
        
        total++;
      });
      
      console.log(url.split('/').pop(), "=> Green:", (greenScore/total).toFixed(2), "Gray:", (grayScore/total).toFixed(2));
    } catch (e) {
      console.error(url, e.message);
    }
  }
}
analyze();
