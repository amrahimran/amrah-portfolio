import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowLeft, Sun, Moon, Menu, X, Mail, Code2, BriefcaseBusiness, ExternalLink } from 'lucide-react';
import './App.css';

const contact = {
  email: 'fathimaamrahimran@gmail.com',
  github: 'https://github.com/amrahimran',
  linkedin: 'https://www.linkedin.com/in/amrah-imran-879807219',
};

const projects = [
  { id:'hepatoai', no:'01', title:'HepatoAI', kind:'AI · HEALTHCARE RESEARCH', color:'blue', motif:'pulse', year:'2026',
    intro:'Investigating whether physiological time-series data can help predict fluid responsiveness during liver transplant surgery.',
    story:'My final-year research explores an AI-assisted clinical decision-support prototype, not an autonomous medical tool. I worked with a VitalDB-derived dataset of 567 adult cases and 167,903 one-minute records, cleaned physiological measurements, created continuous five-minute windows and used case-level data splitting to reduce leakage.',
    details:['Compared Logistic Regression, Random Forest and an Artificial Neural Network as supervised classifiers.','Evaluated discrimination and classification errors using AUROC, precision, recall and confusion matrices.','Investigated probability calibration and uncertainty with source-case cluster bootstrap evaluation.'],
    tags:['Python','pandas','NumPy','scikit-learn','Google Colab','ML evaluation'], status:'Research prototype' },
  { id:'ludo', no:'02', title:'LUDO-T', kind:'JAVA · SOFTWARE ARCHITECTURE', color:'coral', motif:'dice', year:'2026',
    intro:'A game engine where the interesting part is everything happening underneath the board.',
    story:'Built a modular Java Ludo engine with object-oriented architecture, explicit game rules and deterministic randomness. I used design patterns where they solved real architectural problems, rather than treating them as a checklist.',
    details:['Applied Strategy, Factory, Builder, Observer, Command, Chain of Responsibility, State, Facade and Singleton patterns.','Separated movement, blockades and mystery rules into focused services, with SOLID principles guiding responsibilities.','Wrote 137 passing JUnit tests, reaching 93% line, 96% method and 79% branch coverage.'],
    tags:['Java','SOLID','Design patterns','JUnit','Testing'], status:'Completed' },
  { id:'bastion', no:'03', title:'Bastion', kind:'CYBERSECURITY · SCRUM', color:'sage', motif:'shield', year:'2025–26',
    intro:'Making security assessment workflows easier to understand and manage.',
    story:'A collaborative university project developing a cybersecurity assessment application combining vulnerability scanning and attack-simulation features. Across the year-long Scrum project, I rotated through Business Analyst, Project Manager and Developer responsibilities.',
    details:['Created user stories and maintained the product backlog to organise development work.','Used Trello and ClickUp for task management and project coordination.','Contributed to a system bringing together twelve vulnerability scan types and simulated attack scenarios.'],
    tags:['Laravel','Python','Nmap','Scrum','Trello','ClickUp'], status:'University project' },
  { id:'bookstore', no:'04', title:'Bookstore', kind:'FLUTTER · MOBILE', color:'butter', motif:'book', year:'2025',
    intro:'A mobile bookstore experience designed for comfortable browsing.',
    story:'Developed an Android bookstore application with responsive layouts, orientation support, local storage and light/dark interface options.',
    details:['Built screens and interactions with Flutter and Dart.','Integrated SQLite for local data handling.','Worked with app state and device features.'],
    tags:['Flutter','Dart','SQLite','Android'], status:'University project' },
  { id:'booking', no:'05', title:'Car Booking', kind:'C# · DESKTOP', color:'lilac', motif:'road', year:'2024',
    intro:'A straightforward booking system with a structured application backend.',
    story:'Created a graphical car-booking application connecting user-facing forms with a relational database.',
    details:['Used C# and object-oriented programming to structure application logic.','Integrated MySQL for persistent booking data.'],
    tags:['C#','MySQL','OOP'], status:'University project' },
];

const skillGroups = [
  { name:'BUILD', items:'JavaScript · React · HTML/CSS · Tailwind · PHP/Laravel · Java · C# · Flutter' },
  { name:'ANALYSE', items:'Python · pandas · NumPy · scikit-learn · SQL · Excel · Google Sheets' },
  { name:'WORK WITH', items:'Git/GitHub · JUnit · Google Colab · Trello · ClickUp · Agile/Scrum · SOLID' },
];

function Motif({ type, className='' }) {
  const common = { fill:'none', stroke:'currentColor', strokeWidth:2.2, strokeLinecap:'round', strokeLinejoin:'round' };
  return <svg className={`motif ${className}`} viewBox="0 0 240 180" role="img" aria-label={`${type} illustration`}>
    {type==='pulse' && <g {...common}><path d="M8 95h48l19-42 26 89 26-68 17 21h88"/><path d="M30 36c27-17 52-12 69 1M155 143c24 9 44 5 60-8" strokeDasharray="4 9" opacity=".5"/><circle cx="127" cy="74" r="7" fill="currentColor" stroke="none"/></g>}
    {type==='dice' && <g {...common} transform="rotate(-12 120 90)"><rect x="61" y="29" width="118" height="118" rx="15"/><circle cx="88" cy="56" r="6" fill="currentColor"/><circle cx="151" cy="56" r="6" fill="currentColor"/><circle cx="120" cy="88" r="6" fill="currentColor"/><circle cx="88" cy="120" r="6" fill="currentColor"/><circle cx="151" cy="120" r="6" fill="currentColor"/></g>}
    {type==='shield' && <g {...common}><path d="M120 19l70 28v42c0 42-27 69-70 84-43-15-70-42-70-84V47z"/><path d="M91 94l20 20 40-44"/><path d="M26 28l8-10m-4 39l-14-4m185 65l16 8"/></g>}
    {type==='book' && <g {...common}><path d="M120 47c-27-18-55-19-91-9v99c35-11 65-8 91 10 26-18 56-21 91-10V38c-36-10-64-9-91 9z"/><path d="M120 47v100M48 59c20-4 37-1 53 7m38 0c16-8 33-11 53-7"/></g>}
    {type==='road' && <g {...common}><path d="M91 15L47 166M149 15l44 151M120 23v25m0 22v28m0 22v29"/><path d="M28 166h184"/></g>}
  </svg>;
}

function Doodle({ type }) {
  if(type==='wave') return <svg className="mini-doodle" viewBox="0 0 120 44" aria-hidden="true"><path d="M3 21c14-18 25 18 39 0s25 18 39 0 25 18 36 0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>;
  if(type==='star') return <svg className="mini-doodle" viewBox="0 0 60 60" aria-hidden="true"><path d="M30 5l6 19 19 6-19 6-6 19-6-19-19-6 19-6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>;
  return <svg className="mini-doodle" viewBox="0 0 70 70" aria-hidden="true"><path d="M17 50c4-30 30-43 36-23 5 19-30 28-30 7 0-12 14-16 22-11" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></svg>;
}

function ProjectCard({ project, onOpen }) {
  return (
    <button className={`postcard ${project.color}`} onClick={() => onOpen(project.id)}>
      <div className="postcard-top"><span>FIELD NOTE / {project.no}</span><span>{project.year}</span></div>
      <div className="postcard-art"><Motif type={project.motif} /><span className="postmark">A.I.<br />✳</span></div>
      <div className="postcard-body">
        <span className="kicker">{project.kind}</span>
        <div className="postcard-title-row"><h3>{project.title}</h3><ArrowUpRight size={22} /></div>
        <p>{project.intro}</p>
      </div>
    </button>
  );
}

function ProjectDetail({ project, onBack }) {
  return (
    <div className="detail">
      <button className="text-button" onClick={onBack}><ArrowLeft size={17} /> All projects</button>
      <div className={`detail-banner ${project.color}`}>
        <div className="detail-banner-meta"><span>PROJECT FILE / {project.no}</span><span>{project.year}</span></div>
        <Motif type={project.motif} />
      </div>
      <div className="detail-grid">
        <div><span className="kicker">{project.kind}</span><h1>{project.title}<span className="period">.</span></h1><p className="detail-lead">{project.intro}</p></div>
        <div className="detail-copy"><span className="kicker">THE STORY</span><p>{project.story}</p>
          <span className="kicker">WHAT I WORKED ON</span><ul>{project.details.map((item) => <li key={item}>{item}</li>)}</ul>
          <span className="kicker">TOOLS & METHODS</span><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <p className="detail-status">{project.status}</p>
        </div>
      </div>
    </div>
  );
}

const navigation = [
  { id: 'home', number: '01', label: 'The beginning' },
  { id: 'work', number: '02', label: 'Selected work' },
  { id: 'about', number: '03', label: 'A little about me' },
  { id: 'skills', number: '04', label: 'Toolkit & experience' },
  { id: 'contact', number: '05', label: 'Say hello' },
];

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
      <aside className={`sidebar ${menuOpen ? 'is-open' : ''}`}>
        <div className="sidebar-head">
          <button className="brand" onClick={() => navigate('home')}>amrah<span>✳</span></button>
          <button className="icon-button sidebar-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={21} /></button>
          <p>A personal collection of things made, learned & loved.</p>
        </div>
        <div className="nav-caption">THE INDEX <span>2026 / 01</span></div>
        <nav className="side-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <button key={item.id} className={page === item.id ? 'active' : ''} onClick={() => navigate(item.id)} aria-current={page === item.id ? 'page' : undefined}>
              <span className="nav-number">{item.number}</span><span>{item.label}</span><ArrowUpRight size={17} />
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom"><span className="sidebar-mark">✳</span><p>Currently somewhere between<br />code and curiosity.</p><span>COLOMBO, SRI LANKA ↗</span></div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <div className="topbar-left">
            <button className="icon-button menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu size={21} /></button>
            <span className="topbar-title">AMRAH / {navigation.find((item) => item.id === page)?.label.toUpperCase()}</span>
          </div>
          <div className="topbar-right"><span className="availability"><span /> OPEN TO OPPORTUNITIES</span><button className="icon-button theme-toggle" onClick={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}</button></div>
        </header>

        <main className="page-content" key={`${page}-${selected || 'index'}`}>
          {page === 'home' && (
            <section className="landing">
              <div className="eyebrow-row"><span>AN INTRODUCTION, OF SORTS.</span><span>NO. 001 — EST. 2026</span></div>
              <div className="landing-grid">
                <div className="landing-copy">
                  <span className="kicker">HELLO, YOU'VE FOUND MY CORNER OF THE INTERNET.</span>
                  <h1>Part code.<br /><em>Part curiosity.</em><br />All me<span className="period">.</span></h1>
                  <p>I'm Amrah — a software engineering undergraduate who enjoys building useful things, investigating interesting questions and finding the story behind the solution.</p>
                  <button className="pill-button" onClick={() => navigate('work')}>Explore my work <ArrowUpRight size={18} /></button>
                </div>
                <div className="hero-art" aria-label="Illustrated paper collage">
                  <div className="hero-art-card art-card-blue"><span>NOTES FROM<br />SOMEWHERE<br /><i>IN BETWEEN.</i></span><Doodle type="star" /><small>VOL. 01 / 2026</small></div>
                  <div className="hero-art-card art-card-coral"><span>MAKE<br />THINGS<br />MATTER.</span><Doodle type="wave" /></div>
                  <div className="hero-art-stamp">A LITTLE BIT<br />OF EVERYTHING ↗</div>
                </div>
              </div>
              <div className="landing-bottom"><span>DEVELOPMENT / AI / ANALYSIS / LITTLE ADVENTURES</span><span>FLIP THROUGH THE INDEX ↗</span></div>
            </section>
          )}

          {page === 'work' && (currentProject ? <ProjectDetail project={currentProject} onBack={() => setSelected(null)} /> : (
            <section className="inner-page">
              <div className="section-heading"><span className="kicker">02 / THE THINGS I MAKE</span><h1>Selected <em>work.</em></h1><p>Research experiments, software projects and things I learned by making them. Pick a postcard to explore the story.</p></div>
              <div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={openProject} />)}</div>
            </section>
          ))}

          {page === 'about' && (
            <section className="inner-page">
              <div className="section-heading"><span className="kicker">03 / THE HUMAN BEHIND THE SCREEN</span><h1>A little <em>about me.</em></h1></div>
              <div className="about-layout"><div className="about-prose">
                <p className="about-lead">I like figuring out <em>how things work</em> — and asking whether there's a better way to make them.</p>
                <p>I'm completing a BEng (Hons) in Software Engineering at Staffordshire University. My projects have taken me from building Java game engines and cybersecurity applications to researching machine learning for clinical decision support.</p>
                <p>I'm equally interested in the thinking around the technology: exploring data, understanding requirements, explaining findings and making complicated ideas feel approachable.</p>
                <p>And outside the screen? Usually a book, the ocean, or a café I haven't tried yet.</p>
              </div><div className="interests"><div className="interests-title">OFF THE CLOCK <Doodle type="loop" /></div>
                <div className="interest-item"><span className="interest-icon">✳</span><div><strong>Reading</strong><small>For the stories, ideas and rabbit holes.</small></div></div>
                <div className="interest-item"><span className="interest-icon">≈</span><div><strong>The ocean</strong><small>My favourite place to clear my head.</small></div></div>
                <div className="interest-item"><span className="interest-icon">☕</span><div><strong>Café hopping</strong><small>Always up for finding a new little spot.</small></div></div>
                <div className="interest-footer">COLLECTING SMALL MOMENTS, TOO. ↗</div>
              </div></div>
            </section>
          )}

          {page === 'skills' && (
            <section className="inner-page"><div className="section-heading"><span className="kicker">04 / MY TOOLKIT</span><h1>Things I <em>work with.</em></h1><p>A mix of technologies, approaches and tools I've used across projects.</p></div>
              <div className="skills-table">{skillGroups.map((group, index) => <div className="skills-row" key={group.name}><span>0{index + 1}</span><h3>{group.name}</h3><p>{group.items}</p></div>)}</div>
              <div className="experience-strip"><span className="kicker">ALSO PART OF THE STORY</span><div><h3>Freelance web development tutor</h3><p>March – October 2024 · Helping learners understand web development through practical explanations.</p></div><div><h3>Scrum project roles</h3><p>Bastion · User stories, backlog management, project coordination and development using Trello and ClickUp.</p></div></div>
            </section>
          )}

          {page === 'contact' && (
            <section className="contact-page"><span className="kicker">05 / LEAVE A NOTE</span><h1>Let's make<br /><em>something good.</em></h1><p>An opportunity, a collaboration or an interesting conversation — my inbox is open.</p>
              <a className="contact-cta" href={`mailto:${contact.email}`}>Say hello <ArrowUpRight size={23} /></a>
              <div className="social-links"><a href={contact.github} target="_blank" rel="noopener noreferrer"><Code2 size={17} /> GitHub <ExternalLink size={13} /></a><a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><BriefcaseBusiness size={17} /> LinkedIn <ExternalLink size={13} /></a><a href={`mailto:${contact.email}`}><Mail size={17} /> Email <ExternalLink size={13} /></a></div>
            </section>
          )}
        </main>
        <footer className="site-footer"><span>© {new Date().getFullYear()} AMRAH IMRAN</span><span>MADE WITH CURIOSITY ✳</span></footer>
      </div>
    </div>
  );
}
