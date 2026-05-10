import { motion } from 'framer-motion';
import { IMAGES } from '../data';
import { Maximize2 } from 'lucide-react';
import { useState } from 'react';

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Our Work</h2>
          <p className="text-neutral-400 font-light">Real transformations that speak for themselves. Browse through some of our recent deliveries.</p>
          <div className="h-1 w-20 bg-orange-500 mt-6 rounded-full mx-auto" />
        </div>

        {/* Masonry-like grid using CSS columns or just standard grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {IMAGES.portfolio.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={item.id}
              className="relative group break-inside-avoid rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <img 
                src={item.src} 
                alt={`Portfolio Item ${item.id}`} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-orange-500 text-white p-3 rounded-full">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="w-full h-full object-contain rounded-lg border border-neutral-800 shadow-2xl"
            />
            <button 
              className="absolute -top-4 -right-4 w-10 h-10 bg-neutral-800 hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
