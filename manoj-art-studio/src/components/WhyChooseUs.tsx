import { motion } from 'framer-motion';
import { Star, Heart, Clock, ShieldCheck, ThumbsUp } from 'lucide-react';

const reasons = [
  { icon: Heart, title: '100% Custom Artwork', desc: 'Every piece is uniquely crafted just for you.' },
  { icon: Star, title: 'Handmade Quality', desc: 'Uncompromised attention to detail and artistry.' },
  { icon: ThumbsUp, title: 'Affordable Pricing', desc: 'Premium quality artwork that fits your budget.' },
  { icon: Clock, title: 'Fast Delivery', desc: 'Quick turnaround time without losing quality.' },
  { icon: ShieldCheck, title: 'Trusted Service', desc: 'Hundreds of happy customers and beautiful memories.' },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-neutral-950 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Why Choose Us?</h2>
            <p className="text-neutral-400 font-light text-lg mb-8">
              At Manoj Art Studio, we don't just draw portraits; we capture emotions. 
              We take pride in turning your favorite memories into timeless masterpieces.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {reasons.slice(0,4).map((reason, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-neutral-900 p-2 rounded-lg text-orange-500 self-start">
                    <reason.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{reason.title}</h4>
                    <p className="text-sm text-neutral-400 leading-snug">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-neutral-900 border border-neutral-800 rounded-2xl flex gap-4 items-center">
              <div className="bg-orange-500/10 p-3 rounded-full text-orange-500">
                 <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">{reasons[4].title}</h4>
                <p className="text-neutral-400 text-sm">{reasons[4].desc}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-full bg-gradient-to-tr from-neutral-900 to-neutral-800 p-2 border border-neutral-800 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-orange-500/5 mix-blend-overlay" />
               <div className="w-full h-full rounded-full border-2 border-dashed border-neutral-700 flex items-center justify-center p-8">
                 <div className="text-center">
                   <div className="text-6xl font-serif text-orange-500 mb-4 glow-orange leading-none">100%</div>
                   <div className="text-xl font-medium text-white">Satisfaction Guaranteed</div>
                   <div className="text-neutral-400 text-sm mt-2">Crafted with love</div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
