import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({});

const urls = [
  "https://i.ibb.co/4gftyR8W/IMG-20260509-WA0002.jpg",
  "https://i.ibb.co/JWbjMQbw/IMG-20260509-WA0001.jpg",
  "https://i.ibb.co/XZ09XJL0/IMG-20260509-WA0003.jpg",
  "https://i.ibb.co/2Yp4t9N2/IMG-20260509-WA0004.jpg",
  "https://i.ibb.co/prLjjn8S/IMG-20260509-WA0005.jpg",
  "https://i.ibb.co/bgYyCRmJ/IMG-20260509-WA0007.jpg",
  "https://i.ibb.co/B5LYkzGw/IMG-20260509-WA0006.jpg",
  "https://i.ibb.co/HTGSmFF3/IMG-20260509-WA0008.jpg",
  "https://i.ibb.co/23kPmBqr/IMG-20260509-WA0009.jpg",
  "https://i.ibb.co/JWCy8P06/IMG-20260509-WA0011.jpg",
  "https://i.ibb.co/GvQQ0L1H/IMG-20260509-WA0010.jpg",
  "https://i.ibb.co/cKK94NvG/IMG-20260509-WA0014.jpg",
  "https://i.ibb.co/RG7fCMBs/IMG-20260509-WA0013.jpg",
  "https://i.ibb.co/Z6g773ND/IMG-20260509-WA0012.jpg",
  "https://i.ibb.co/nWC4tvN/IMG-20260509-WA0015.jpg",
  "https://i.ibb.co/27G04S1F/IMG-20260509-WA0016.jpg",
  "https://i.ibb.co/PGzq8Pgr/IMG-20260509-WA0017.jpg",
  "https://i.ibb.co/DgMSmx6R/IMG-20260509-WA0020.jpg",
  "https://i.ibb.co/msXKv67/IMG-20260509-WA0018.jpg",
  "https://i.ibb.co/VrqsDfj/IMG-20260509-WA0019.jpg",
  "https://i.ibb.co/Lh0wbc48/IMG-20260509-WA0021.jpg"
];

async function main() {
  for (const url of urls) {
    try {
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      const base64 = Buffer.from(buffer).toString('base64');
      
      const res = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [
            { text: 'Classify this image into one of the following exact categories: leaf, sketch, collage, canvas, physical_frame, photo_restoration. Return ONLY the category name.' },
            { inlineData: { data: base64, mimeType: 'image/jpeg' } }
          ]}
        ]
      });
      console.log(`${url.split('/').pop()}: ${res.text.trim()}`);
    } catch (e) {
      console.log(`Failed on ${url.split('/').pop()}:`, e.message);
    }
  }
}

main();
