
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="pt-32 pb-10 border-t border-white/10 relative overflow-hidden">
      
      {/* Background large text */}
      <div className="absolute bottom-[-10%] left-0 w-full pointer-events-none opacity-5 flex justify-center overflow-hidden">
         <h1 className="text-[25vw] font-display font-bold leading-none whitespace-nowrap">CONTACT</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6">
              HOW <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>CAN</span> I HELP?
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed mb-10">
              I am open to UI/UX design and product design opportunities. Let’s talk about your team and what you are building.
            </p>
            <a href="mailto:omarboustany100@gmail.com" className="inline-flex items-center justify-center px-8 py-4 bg-white text-dark-bg font-bold rounded-full hover:bg-gray-200 transition-colors">
              omarboustany100@gmail.com
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 gap-12"
          >
            <div>
              <h4 className="text-sm text-dark-accent font-medium tracking-widest uppercase mb-6 pb-4 border-b border-white/10">Menu</h4>
              <ul className="space-y-4">
                <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Work</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Omar Al Boustany. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
