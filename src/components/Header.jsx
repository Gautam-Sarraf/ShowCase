import React from 'react';
import { ArrowRight, Menu, Sun, Moon } from 'lucide-react';

export default function Header({ onOpenContact, onOpenMenu, theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">
          showcase<span className="logo-dot">.</span>
        </a>
        <div className="nav-actions">
          <button onClick={onOpenContact} className="btn btn-secondary">
            Let's Talk <ArrowRight size={16} />
          </button>
          <button 
            onClick={onToggleTheme} 
            className="btn-icon-only" 
            aria-label="Toggle light/dark mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={onOpenMenu} className="btn-icon-only" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

