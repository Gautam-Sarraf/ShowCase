import React from 'react';
import { X, Mail } from 'lucide-react';

export default function NavDrawer({ onClose, onHome, onScrollToWorks, onOpenContact }) {
  return (
    <div className="nav-drawer-overlay" onClick={onClose}>
      <div 
        className="nav-drawer animate-slide-in-right" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nav-drawer-header">
          <span className="logo">gautam<span className="logo-dot">.</span></span>
          <button onClick={onClose} className="btn-icon-only" aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="nav-drawer-links">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              onHome();
              onClose();
            }} 
            className="nav-drawer-link"
          >
            Home
          </a>
          <a 
            href="#works" 
            onClick={(e) => {
              e.preventDefault();
              onScrollToWorks();
              onClose();
            }} 
            className="nav-drawer-link"
          >
            Selected Works
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              onOpenContact();
              onClose();
            }} 
            className="nav-drawer-link"
          >
            Let's Talk
          </a>
        </nav>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <span className="form-label">Find me on</span>
          <div className="footer-socials">
            <a 
              href="https://github.com/gautam-sarraf" 
              target="_blank" 
              rel="noreferrer"
              className="btn-icon-only"
              aria-label="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/gautam-sarraf" 
              target="_blank" 
              rel="noreferrer"
              className="btn-icon-only"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="mailto:gautam.sarraf_cs22@gla.ac.in" 
              className="btn-icon-only"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
