import { useEffect, useState } from 'react';
import './styles/App.css';
import { projects } from './data/projects.js';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import Footer from './components/Footer.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('amrah-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch { /* storage can be unavailable */ }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [page, setPage] = useState('home');
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('amrah-theme', theme); } catch { /* ignore */ }
  }, [theme]);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [page, selected]);

  const navigate = (id) => {
    setPage(id);
    setSelected(null);
    setMenuOpen(false);
  };

  const openProject = (id) => { setPage('work'); setSelected(id); setMenuOpen(false); };
  const currentProject = projects.find((project) => project.id === selected);

  return (
    <div className="site-shell">
      {menuOpen && <button className="mobile-backdrop" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />}
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} page={page} navigate={navigate} />
      <div className="main-column">
        <Topbar page={page} theme={theme} setTheme={setTheme} setMenuOpen={setMenuOpen} />
        <main className="page-content" key={`${page}-${selected || 'index'}`}>
          {page === 'home' && <Home navigate={navigate} />}
          {page === 'work' && (currentProject
            ? <ProjectDetail project={currentProject} onBack={() => setSelected(null)} />
            : <Work openProject={openProject} />)}
          {page === 'about' && <About />}
          {page === 'skills' && <Skills />}
          {page === 'contact' && <Contact />}
        </main>
        <Footer />
      </div>
    </div>
  );
}
