import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function ContactModal({ onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "86f2f3a0-cdc8-438d-b6d4-634e52b87631",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Business Inquiry: ${formData.name}`
        })
      });

      const res = await response.json();
      if (res.success) {
        setIsSubmitted(true);
      } else {
        alert(res.message || "Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 className="modal-title">Let's connect</h2>
          <button 
            onClick={onClose} 
            className="btn-icon-only"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }} className="animate-fade-in">
            <div className="modal-success-icon">
              <Send size={24} />
            </div>
            <h3 className="modal-success-title">Message Sent!</h3>
            <p className="modal-success-desc">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
            <button onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input 
                type="text" 
                id="name"
                required
                placeholder="Ivan..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
                type="email" 
                id="email"
                required
                placeholder="ivan@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message"
                required
                rows={4}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-input form-textarea"
              />
            </div>

            <div className="form-actions">
              <button type="button" onClick={onClose} className="btn btn-secondary">
                Cancel
              </button>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
