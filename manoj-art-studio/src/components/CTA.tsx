import { motion } from 'framer-motion';
import { WHATSAPP_LINK } from '../data';
import { MessageCircle } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-neutral-900 relative overflow-hidden border-t border-neutral-800">
      {/* Glow effect background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-neutral-950 p-12 rounded-3xl border border-neutral-800 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Turn Your Photo into Art?
          </h2>
          <p className="text-xl text-neutral-400 mb-10 font-light">
            Don't let your memories stay hidden in your phone. Let us craft them into a masterpiece you can hold and cherish forever.
          </p>
          
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-gradient-brand text-white px-10 py-5 rounded-full font-bold tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,87,34,0.4)] hover:-translate-y-1 content-center text-lg mb-4"
          >
            <MessageCircle className="w-6 h-6" />
            <span>VIEW CATALOG</span>
          </a>
          <p className="text-sm text-neutral-500">Fast replies • Secure payment • Safe delivery</p>
        </motion.div>
      </div>
    </section>
  );
}
