import { ArrowUpRight, X } from 'lucide-react';
import { Sketch } from './Illustrations.jsx';
import { navigation } from '../data/navigation.js';

export default function Sidebar({ menuOpen, setMenuOpen, page, navigate }) {
  return (
      <aside className={`sidebar ${menuOpen ? 'is-open' : ''}`}>
        <div className="sidebar-head">
          <button className="brand" onClick={() => navigate('home')}>amrah<Sketch type="lotus" className="brand-lotus" /></button>
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
        <div className="sidebar-bottom"><Sketch type="lotus" className="sidebar-mark" /><p>Currently somewhere between<br />code and curiosity.</p><span>COLOMBO, SRI LANKA ↗</span></div>
      </aside>
  );
}
