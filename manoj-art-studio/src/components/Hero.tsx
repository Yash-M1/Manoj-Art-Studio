import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { MouseEvent } from 'react';
import { IMAGES, WHATSAPP_LINK, HERO_QUOTE_MARATHI } from '../data';
import { MessageCircle } from 'lucide-react';

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Interactive 3D tilt effect roughly based on viewport boundaries
  const rotateX = useTransform(mouseY, [0, 800], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 1200], [-8, 8]);

  return (
    <section id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16 group"
      style={{ perspective: 1000 }}
    >
      {/* Background Image Container - Stylish Art */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          animate={{ scale: [1.05, 1.1, 1.05] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          src={IMAGES.heroBg}
          alt="Art Studio Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950" />
      </div>

      {/* Interactive Flashlight Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(217, 119, 6, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Marathi Quote interactive badge */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all cursor-default shadow-lg"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5722] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e61d00]"></span>
            </span>
            <span className="text-orange-50 font-medium tracking-wide text-sm sm:text-base drop-shadow-md">
              {HERO_QUOTE_MARATHI}
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-6 text-white drop-shadow-md">
            Turn Your Memories into <span className="text-gradient drop-shadow-[0_0_15px_rgba(255,87,34,0.3)] italic">Beautiful Art</span>
          </h1>
          <p className="text-xl text-neutral-300 mb-10 font-sans font-light leading-relaxed">
            Custom Sketches, Frames & Digital Artwork Made Just for You. 
            Crafted with passion, delivered with love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-brand text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,87,34,0.4)] hover:-translate-y-1 border border-orange-400/20"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </a>
            <a 
              href="#gallery"
              className="flex items-center justify-center bg-transparent backdrop-blur-sm hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
            >
              View Our Work
            </a>
          </div>
        </motion.div>

        {/* 3D Floating Artworks Showcase attached to mouse position */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative h-[600px] hidden lg:block shadow-2xl"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md" style={{ transformStyle: "preserve-3d" }}>
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src={IMAGES.heroArt1} 
              alt="Artwork Sample 1" 
              className="absolute z-20 w-3/4 shadow-2xl rounded-lg border border-white/10 object-cover rotate-[-5deg] drop-shadow-2xl top-24"
              style={{ transform: "translateZ(50px)" }}
            />
            <motion.img 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              src={IMAGES.heroArt2} 
              alt="Artwork Sample 2" 
              className="absolute z-10 w-3/4 shadow-2xl rounded-lg border border-white/10 object-cover rotate-[8deg] right-0 top-60 drop-shadow-2xl opacity-90"
              style={{ transform: "translateZ(-20px)" }}
            />
            
            {/* Decorative blurs */}
            <div className="absolute top-1/4 -left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-[50px] -z-10" />
            <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-[60px] -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
