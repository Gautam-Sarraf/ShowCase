import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Gallery({ projects, onSelectProject }) {
  return (
    <section id="works" className="gallery-section">
      <div className="container">
        <h2 className="gallery-title">Selected works</h2>
        
        <div className="project-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => onSelectProject(project.id)}
            >
              {/* Device Mockup Frame Container */}
              <div className="device-wrapper">
                <div className="device-frame-browser">
                  <div className="browser-header">
                    <div className="browser-dot"></div>
                    <div className="browser-dot"></div>
                    <div className="browser-dot"></div>
                  </div>
                  <div className="browser-content">
                    <img 
                      src={project.images[0]} 
                      alt={`${project.title} screenshot`} 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <div className="project-info">
                <div className="project-meta">
                  <h3 className="project-card-title">
                    {project.title}
                  </h3>
                  <p className="project-card-subtitle">
                    {project.subtitle}
                  </p>
                </div>
                <div className="project-icon-btn">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Tags */}
              <div className="tag-container">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
