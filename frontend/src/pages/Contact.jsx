import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <MessageSquare className="contact-header-icon" />
        <div>
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">Let's connect and discuss opportunities</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2 className="contact-info-title">Contact Information</h2>
          <p className="contact-info-text">
            Feel free to reach out to me through any of these channels.
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <Mail className="contact-icon" />
              <div>
                <h3 className="contact-detail-title">Email</h3>
                <a href="mailto:your.email@example.com" className="contact-detail-value">
                  Ong.Junzhen@yahoo.com
                </a>
              </div>
            </div>

            <div className="contact-detail-item">
              <Phone className="contact-icon" />
              <div>
                <h3 className="contact-detail-title">Phone</h3>
                <a href="tel:+6512345678" className="contact-detail-value">
                  +65 8011 7982
                </a>
              </div>
            </div>

            <div className="contact-detail-item">
              <MapPin className="contact-icon" />
              <div>
                <h3 className="contact-detail-title">Location</h3>
                <p className="contact-detail-value">Ang Mo Kio, Singapore</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3 className="social-title">Connect with me</h3>
            <div className="social-icons">
              <a href="https://github.com/projectedjz" className="social-link" title="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ong-jun-zhen-1a706233a/" className="social-link" title="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2 className="form-title">Send Me a Message</h2>
          <p className="form-description">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
          <div className="google-form-embed">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdxDtpufyRgfo7CMlM04pMF_zQEp40sWKP0C8PcU63g2hDaYg/viewform?usp=header"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
