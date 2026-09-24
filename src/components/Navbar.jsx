
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = event => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <nav className="site-nav fixed w-full top-0 z-50 bg-[#0f1115]/90 backdrop-blur-md" aria-label="Main navigation">
      <div className="site-nav-inner max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter text-white"
        >
          <a href="#top" onClick={() => setMenuOpen(false)} aria-label="Omar, back to top">OMAR<span className="text-[#00df8f]">.</span></a>
        </motion.div>

        <div className="flex items-center gap-12">
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide text-gray-300">
            <a href="#about" className="hover:text-[#00df8f] transition-colors">ABOUT</a>
            <a href="#work" className="hover:text-[#00df8f] transition-colors">WORK</a>
            <a href="#contact" className="hover:text-[#00df8f] transition-colors">CONTACT</a>
          </div>

          <a href="#contact" aria-label="Contact Omar" onClick={() => setMenuOpen(false)} className="nav-contact w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#00df8f] hover:border-[#00df8f]/50 hover:bg-[#00df8f]/10 transition-colors">
            <Mail size={19} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <button type="button" className="mobile-menu-toggle md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      <div id="mobile-navigation" className={`mobile-navigation md:hidden ${menuOpen ? 'is-open' : ''}`} inert={!menuOpen}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About <span>01</span></a>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work <span>02</span></a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Process <span>03</span></a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact <span>04</span></a>
      </div>
    </nav>
  );
};

export default Navbar;
