import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  return (
    <section className="hero-section animate-fade-in-up">
      <div className="container">
        <p className="hero-subtitle">Hello! I'm Gautam.</p>
        <h1 className="hero-title">
          Designing robust systems with emphasis on <span className="text-gradient">backend AI &amp; automation.</span>
        </h1>
        <div className="hero-footer">
          <button onClick={onOpenContact} className="btn btn-primary">
            Let's Talk <ArrowRight size={18} />
          </button>
          <p className="hero-description">
            A systems &amp; full-stack engineer building production-ready scheduling engines, conversational RAG pipelines, and automated web scraping flows.
          </p>
        </div>
      </div>
    </section>
  );
}
