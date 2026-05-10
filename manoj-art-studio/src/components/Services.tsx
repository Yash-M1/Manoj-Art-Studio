import { motion } from 'framer-motion';
import { IMAGES, WHATSAPP_LINK } from '../data';
import { ChevronRight } from 'lucide-react';

const services = [
  { id: 'leaf', title: 'Digital Leaf Art', desc: 'Intricate portraits carved onto natural leaves digitally.', img: IMAGES.services.leafArt },
  { id: 'couple', title: 'Couple Frame', desc: 'Beautifully enhanced couple portraits for your home.', img: IMAGES.services.coupleFrame },
  { id: 'collage', title: 'Collage Photo Frame', desc: 'Combine your favorite memories into one stunning frame.', img: IMAGES.services.collage },
  { id: 'sketch', title: 'Graphite & Charcoal Sketch', desc: 'Hand-drawn, hyper-realistic black & white portraits.', img: IMAGES.services.sketch },
  { id: 'canvas', title: 'Digital Canvas Art', desc: 'Premium digital paintings printed on high-quality canvas.', img: IMAGES.services.canvasArt },
  { id: 'restoration', title: 'Old Photo Restoration', desc: 'Bring damaged, black & white vintage photos back to life.', img: IMAGES.services.restoration },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-900 border-y border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Our Services</h2>
          <p className="text-neutral-400 font-light">Explore our wide range of custom artwork designed to preserve your precious moments.</p>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={service.id}
              className="bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 group hover:border-orange-500/50 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${service.id === 'couple' ? 'object-[center_20%]' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">{service.desc}</p>
                <div className="flex justify-end mt-auto">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 text-sm font-semibold flex items-center hover:text-orange-400 transition-colors"
                  >
                    Discuss on WhatsApp <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
