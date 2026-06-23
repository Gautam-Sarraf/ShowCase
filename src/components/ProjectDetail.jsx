import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Cpu, ShieldAlert, Award } from 'lucide-react';

export default function ProjectDetail({ project, onBack }) {
  const [activeImage, setActiveImage] = useState(project.images[0]);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveImage(project.images[0]);
  }, [project.id]);

  return (
    <div className="project-detail-section animate-slide-up">
      <div className="container">
        {/* Back Button */}
        <button 
          onClick={onBack} 
          className="back-button"
        >
          <ArrowLeft size={16} /> Back to selected works
        </button>

        {/* Title */}
        <h1 className="detail-title">
          {project.title}
        </h1>
        <p className="detail-subtitle">
          {project.subtitle}
        </p>

        {/* Project Stats Panel */}
        <div className="detail-stats-panel">
          <div className="stat-item">
            <span className="stat-label">Our Role</span>
            <span className="stat-value">{project.stats.role}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Timeline</span>
            <span className="stat-value">{project.stats.duration}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Key Outcome</span>
            <span className="stat-value">{project.stats.impact}</span>
          </div>
        </div>

        {/* Main Mockup Showcase */}
        <div className="detail-mockup-wrapper" style={{ flexDirection: 'column', gap: '24px' }}>
          <div className="device-frame-browser shadow-2xl">
            <div className="browser-header">
              <div className="browser-dot"></div>
              <div className="browser-dot"></div>
              <div className="browser-dot"></div>
            </div>
            <div className="browser-content">
              <img 
                src={activeImage} 
                alt={`${project.title} detailed view`} 
              />
            </div>
          </div>

          {/* Thumbnails Row */}
          {project.images && project.images.length > 1 && (
            <div className="thumbnail-list">
              {project.images.map((imgUrl, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`thumbnail-item ${activeImage === imgUrl ? 'active' : ''}`}
                  aria-label={`View screenshot ${index + 1}`}
                >
                  <img 
                    src={imgUrl} 
                    alt={`${project.title} preview thumbnail ${index + 1}`}
                    className="thumbnail-img" 
                  />
                </button>
              ))}
            </div>
          )}
        </div>


        {/* Description & Technical Breakdown */}
        <div className="detail-grid">
          {/* Main Description */}
          <div className="detail-main">
            <div>
              <h2 className="detail-section-title">Project Overview</h2>
              <p className="detail-paragraph">
                {project.longDescription}
              </p>
            </div>

            <div className="architecture-card">
              <div className="architecture-icon-wrapper">
                <Cpu size={20} />
              </div>
              <div className="architecture-info">
                <h3 className="architecture-title">System Architecture</h3>
                <p className="architecture-desc">
                  {project.architecture}
                </p>
              </div>
            </div>
          </div>

          {/* Technical Details Sidebar */}
          <div className="detail-sidebar">
            <div className="sidebar-section">
              <h3 className="detail-section-title" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Tech Stack</h3>
              <div className="tag-container">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="sidebar-challenge-card">
              <ShieldAlert size={20} className="sidebar-challenge-icon" />
              <div className="sidebar-challenge-content">
                <h4 className="sidebar-challenge-title">Technical Challenge</h4>
                <p className="sidebar-challenge-desc">
                  {project.challenges}
                </p>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="cta-container">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary"
              >
                Launch Project <ArrowUpRight size={18} />
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg> View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
