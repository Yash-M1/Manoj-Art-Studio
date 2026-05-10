import { motion } from 'framer-motion';
import { Send, Image as ImageIcon, Search, CheckCircle, Truck } from 'lucide-react';

const steps = [
  { icon: Send, title: 'Send your photo', desc: 'Message us on WhatsApp with the photo you want to transform.' },
  { icon: ImageIcon, title: 'Choose art style', desc: 'Select from sketching, digital art, leaf art, or frames.' },
  { icon: Search, title: 'Get preview', desc: 'We will share a watermarked preview for your approval.' },
  { icon: CheckCircle, title: 'Confirm order', desc: 'Once happy, make the payment to confirm your order.' },
  { icon: Truck, title: 'Delivery', desc: 'Your artwork is safely packaged and shipped to your door.' },
];

export function HowItWorks() {
  return (
    <section id="order-process" className="py-24 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">How to Order</h2>
          <p className="text-neutral-400 font-light">Your masterpiece is just 5 simple steps away.</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-neutral-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center mb-6 shadow-xl relative group">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon className="w-8 h-8 text-orange-500 relative z-10" />
                  
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-neutral-900">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
