import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ProjectDetail from './components/ProjectDetail';
import ContactModal from './components/ContactModal';
import NavDrawer from './components/NavDrawer';
import { projects } from './data/projects';
import { Mail } from 'lucide-react';

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme configuration
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Sync state with URL hash for browser back button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#project-')) {
        const id = hash.replace('#project-', '');
        const projectExists = projects.some(p => p.id === id);
        if (projectExists) {
          setSelectedProjectId(id);
        } else {
          setSelectedProjectId(null);
        }
      } else {
        setSelectedProjectId(null);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (id) => {
    window.location.hash = `#project-${id}`;
  };

  const handleBackToGallery = () => {
    window.location.hash = '';
  };

  const handleScrollToWorks = () => {
    setSelectedProjectId(null);
    window.location.hash = '';
    setTimeout(() => {
      const worksSection = document.querySelector('.gallery-section');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const activeProject = projects.find(p => p.id === selectedProjectId);

  return (
    <div className="app-wrapper">
      <Header 
        onOpenContact={() => setIsContactOpen(true)} 
        onOpenMenu={() => setIsMenuOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="main-content">
        {activeProject ? (
          <ProjectDetail 
            project={activeProject} 
            onBack={handleBackToGallery} 
          />
        ) : (
          <>
            <Hero onOpenContact={() => setIsContactOpen(true)} />
            <Gallery 
              projects={projects} 
              onSelectProject={handleSelectProject} 
            />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              gautam<span className="logo-dot">.</span>
            </a>
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Gautam Sarraf. All rights reserved.
            </p>
          </div>
          
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
      </footer>

      {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )}

      {isMenuOpen && (
        <NavDrawer 
          onClose={() => setIsMenuOpen(false)} 
          onHome={handleBackToGallery}
          onScrollToWorks={handleScrollToWorks}
          onOpenContact={() => setIsContactOpen(true)}
        />
      )}
    </div>
  );
}

export default App;
