import { Jimp } from 'jimp';

async function main() {
  const image = await Jimp.read('https://i.ibb.co/N23wZ5rR/file-00000000b20471faa1e5bb230aa09322.png');
  const bgR = 17, bgG = 22, bgB = 31;

  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // distance to background color
    const dist = Math.sqrt(Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2));
    
    if (dist < 60) {
      this.bitmap.data[idx + 3] = 0; // Completely transparent
    } else if (dist < 120) {
      // Fade alpha for smooth edges
      const alpha = Math.floor( ((dist - 60) / 60) * 255 );
      this.bitmap.data[idx + 3] = Math.min(this.bitmap.data[idx + 3], alpha);
      
      // Attempt to clean the fringe by shifting the color towards white/orange
      // Since it's a mix of background and foreground, we just leave the color and let alpha do the work
    }
  });

  // Autocrop the transparent edges so the logo is larger and doesn't have empty space around it
  image.autocrop();

  await image.write('public/logo-transparent.png');
  console.log('Saved transparent logo to public/logo-transparent.png');
}

main().catch(console.error);
