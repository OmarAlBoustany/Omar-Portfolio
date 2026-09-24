import { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../projects';

const works = projects;

export default function RecentWorks() {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });

  useMotionValueEvent(scrollYProgress, 'change', progress => {
    setActiveIdx(Math.min(works.length - 1, Math.max(0, Math.round(progress * (works.length - 1)))));
  });

  return (
    <section id="work" ref={sectionRef} className="work-scroll" style={{ '--project-count': works.length }} aria-label="Selected projects">
      <div className="work-sticky">
        <div className="work-content">
          <div className="work-heading">
            <div>
              <p className="text-sm text-dark-accent font-medium tracking-widest uppercase mb-2">Portfolio</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">RECENT WORKS</h2>
            </div>
            <span className="work-count" aria-label={`Project ${activeIdx + 1} of ${works.length}`}>0{activeIdx + 1} / 0{works.length}</span>
          </div>

          <div className="work-layout">
            <div className="work-card-column">
              <div className="work-card-stack" aria-label={`${works[activeIdx].title} design preview`}>
                {works.map((work, index) => {
                  const diff = (index - activeIdx + works.length) % works.length;
                  const isActive = diff === 0;
                  return (
                    <motion.div
                      key={work.title}
                      initial={false}
                      animate={{ y: diff * 26, scale: 1 - diff * .045, opacity: 1 - diff * .19, rotateX: diff * 2 }}
                      transition={{ duration: .62, ease: [.32, .72, 0, 1] }}
                      style={{ zIndex: works.length - diff, transformOrigin: 'top center' }}
                      className="work-card"
                      aria-hidden={!isActive}
                    >
                      <img src={work.cover} alt={isActive ? `${work.title} interface design` : ''} />
                      <motion.div className="work-card-overlay" animate={{ opacity: isActive ? 1 : 0 }} transition={{ duration: .35 }}>
                        <h3>{work.title}</h3>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="work-dots" aria-hidden="true">
                {works.map((work, index) => <span key={work.title} className={index === activeIdx ? 'active' : ''} />)}
              </div>
            </div>

            <div className="work-detail" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div key={works[activeIdx].title}
                  initial={{ opacity: 0, x: 18, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -18, filter: 'blur(6px)' }}
                  transition={{ duration: .28 }}
                >
                  <p className="work-category">{works[activeIdx].category}</p>
                  <h3>{works[activeIdx].title}</h3>
                  <p className="work-description">{works[activeIdx].description}</p>
                  <div className="work-tags">{works[activeIdx].tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a href={`${import.meta.env.BASE_URL}?project=${works[activeIdx].slug}`}>
                    View project <span className="work-link-icon"><ArrowUpRight size={17} aria-hidden="true" /></span>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <p className="work-scroll-hint">SCROLL TO EXPLORE <span>↓</span></p>
        </div>
      </div>
    </section>
  );
}
