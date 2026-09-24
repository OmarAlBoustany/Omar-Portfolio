import { useEffect } from 'react';
import { projects } from './projects';
import ProjectDetail from './components/ProjectDetail';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import RecentWorks from './components/RecentWorks';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) {
        const previous = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        target.scrollIntoView();
        requestAnimationFrame(() => { document.documentElement.style.scrollBehavior = previous; });
      }
    });
  }, []);
  const slug = new URLSearchParams(window.location.search).get('project');
  const project = projects.find(item => item.slug === slug);
  if (project) return <ProjectDetail project={project} />;
  return (
    <div className="min-h-screen bg-dark-bg text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <RecentWorks />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
