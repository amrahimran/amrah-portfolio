import { Menu, Sun, Moon } from 'lucide-react';
import { navigation } from '../data/navigation.js';

export default function Topbar({ page, theme, setTheme, setMenuOpen }) {
  return (
        <header className="topbar">
          <div className="topbar-left">
            <button className="icon-button menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu size={21} /></button>
            <span className="topbar-title">AMRAH / {navigation.find((item) => item.id === page)?.label.toUpperCase()}</span>
          </div>
          <div className="topbar-right"><span className="availability"><span /> OPEN TO OPPORTUNITIES</span><button className="icon-button theme-toggle" onClick={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}</button></div>
        </header>
  );
}
