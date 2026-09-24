
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0f1115]/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          OMAR<span className="text-[#00df8f]">.</span>
        </motion.div>

        <div className="flex items-center gap-12">
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide text-gray-300">
            <a href="#about" className="hover:text-[#00df8f] transition-colors">ABOUT</a>
            <a href="#work" className="hover:text-[#00df8f] transition-colors">WORK</a>
            <a href="#contact" className="hover:text-[#00df8f] transition-colors">CONTACT</a>
          </div>

          <a href="#contact" aria-label="Contact Omar" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#00df8f]/50 transition-colors">
            <div className="w-2 h-2 rounded-full bg-[#00df8f]"></div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
