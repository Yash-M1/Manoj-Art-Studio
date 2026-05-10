import { useState, useEffect } from 'react';
import { IMAGES, WHATSAPP_LINK } from '../data';
import { Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ORDER PROCESS', href: '#order-process' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
          isScrolled && !mobileMenuOpen
            ? "bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 py-0.5 shadow-lg" 
            : "bg-transparent py-1"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="relative z-50 flex items-center">
            <img 
              src={IMAGES.logo} 
              alt="Manoj Art Studio" 
              className="h-20 md:h-22 w-auto object-contain" 
              style={{ filter: 'brightness(1.05) contrast(1.05)' }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xs tracking-widest font-medium text-neutral-300 hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-brand text-white px-6 py-2.5 rounded-full text-xs tracking-wider font-semibold transition-all hover:shadow-[0_0_20px_rgba(255,87,34,0.4)] hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              VIEW CATALOG
            </a>
          </div>

          {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center relative z-[70]">
          {!mobileMenuOpen && (
            <button 
              className="text-white p-2 -mr-2"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(true);
              }}
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          )}
        </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-neutral-950/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 md:hidden z-[75]",
        mobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
      )}>
        <button 
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="w-full px-8 flex flex-col text-center mt-12">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                "py-6 text-sm tracking-[0.2em] font-medium transition-colors",
                idx === 0 ? "text-orange-500" : "text-neutral-400 hover:text-white",
                idx !== navLinks.length - 1 ? "border-b border-neutral-800" : ""
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 flex justify-center border-t border-neutral-800">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-brand text-white px-8 py-4 rounded-full text-sm tracking-wider font-semibold shadow-[0_4px_14px_rgba(255,87,34,0.4)] transition-transform active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle className="w-5 h-5" />
              VIEW CATALOG
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
