import { IMAGES, WHATSAPP_LINK, CONTACT_INFO, SOCIAL_LINKS } from '../data';
import { Facebook, Instagram, Youtube, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-950 pt-20 pb-10 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <img 
              src={IMAGES.logo} 
              alt="Manoj Art Studio" 
              className="h-32 w-auto mb-6 object-contain"
              style={{ filter: 'drop-shadow(0px 0px 8px rgba(255,255,255,0.1))' }}
            />
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Transforming your cherished memories into stunning, custom-made artworks. We specialize in digital art, sketches, and premium framing.
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-[#1877F2] hover:bg-neutral-800 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-[#E1306C] hover:bg-neutral-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-[#FF0000] hover:bg-neutral-800 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-neutral-400 hover:text-orange-500 transition-colors text-sm tracking-widest uppercase">Home</a></li>
              <li><a href="#gallery" className="text-neutral-400 hover:text-orange-500 transition-colors text-sm tracking-widest uppercase">Gallery</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-orange-500 transition-colors text-sm tracking-widest uppercase">Services</a></li>
              <li><a href="#order-process" className="text-neutral-400 hover:text-orange-500 transition-colors text-sm tracking-widest uppercase">Order Process</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-orange-500 transition-colors text-sm tracking-widest uppercase">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-neutral-400">Digital Leaf Art</li>
              <li className="text-neutral-400">Couple Portraits</li>
              <li className="text-neutral-400">Charcoal Sketches</li>
              <li className="text-neutral-400">Old Photo Restoration</li>
              <li className="text-neutral-400">Custom Collages</li>
            </ul>
          </div>

          <div id="contact">
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 text-orange-500 shrink-0 group-hover:text-orange-400 transition-colors" />
                  <span className="text-neutral-400 group-hover:text-white transition-colors">{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-neutral-400 whitespace-pre-line leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-neutral-900 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Manoj Art Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
