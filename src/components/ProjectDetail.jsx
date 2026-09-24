import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, X } from 'lucide-react';

export default function ProjectDetail({ project }) {
  const [zoomed, setZoomed] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${project.title} — Omar Al Boustany`;
    return () => { document.title = 'Omar Al Boustany — UI/UX Designer'; };
  }, [project]);

  useEffect(() => {
    if (!zoomed) return undefined;
    const onKeyDown = event => { if (event.key === 'Escape') setZoomed(null); };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; };
  }, [zoomed]);

  return (
    <div className="project-page">
      <header className="project-nav">
        <a className="project-brand" href={import.meta.env.BASE_URL}>OMAR<span>.</span></a>
        <a href={`${import.meta.env.BASE_URL}#work`}><ArrowLeft size={17} aria-hidden="true" /> All projects</a>
      </header>
      <main>
        <section className="project-intro">
          <a className="project-back" href={`${import.meta.env.BASE_URL}#work`}><ArrowLeft size={17} aria-hidden="true" /> BACK TO WORK</a>
          <p className="project-kicker">SELECTED WORK / {project.category.toUpperCase()}</p>
          <h1>{project.title}<span>.</span></h1>
          <p className="project-summary">{project.description}</p>
          <div className="project-intro-meta">
            <div>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <p>{project.screens.length} {project.screens.length === 1 ? 'SCREEN' : 'SCREENS'} <span>↓</span></p>
          </div>
        </section>

        <nav className="screen-index" aria-label="Project screens">
          {project.screens.map((screen, index) => (
            <a key={screen.image} href={`#screen-${index + 1}`}><span>0{index + 1}</span>{screen.title}</a>
          ))}
        </nav>

        <div className="project-screens">
          {project.screens.map((screen, index) => (
            <section id={`screen-${index + 1}`} className="project-screen" key={screen.image}>
              <div className="project-screen-heading"><span>0{index + 1} / 0{project.screens.length}</span><h2>{screen.title}</h2></div>
              <button type="button" className="project-screen-image" onClick={() => setZoomed(screen)} aria-label={`Enlarge ${screen.title}`}>
                <img src={screen.image} alt={`${project.title}: ${screen.title}`} loading={index ? 'lazy' : 'eager'} />
                <span>VIEW FULL SCREEN <ArrowUpRight size={16} aria-hidden="true" /></span>
              </button>
            </section>
          ))}
        </div>
        <div className="project-end"><a href={`${import.meta.env.BASE_URL}#work`}><ArrowLeft size={18} aria-hidden="true" /> Back to all projects</a></div>
      </main>
      {zoomed && <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={`${zoomed.title} enlarged`} onClick={() => setZoomed(null)}>
        <a className="project-lightbox-original" href={zoomed.image} target="_blank" rel="noopener noreferrer" onClick={event => event.stopPropagation()}>Open full image <ArrowUpRight size={16} aria-hidden="true" /></a>
        <button type="button" onClick={() => setZoomed(null)} aria-label="Close image"><X size={26} /></button>
        <img src={zoomed.image} alt={`${project.title}: ${zoomed.title}`} onClick={event => event.stopPropagation()} />
      </div>}
    </div>
  );
}
