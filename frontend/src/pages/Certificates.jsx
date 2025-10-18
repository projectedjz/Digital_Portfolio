import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Download, ExternalLink } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: `Director's List Award 2024/2025 `,
      issuer: 'Director of School Of Information Techology',
      date: 'May 2025',
      description: 'Outstanding Academic Performance in Year 1 Semester 2',
      link: '/certificates/director_2024-2025.jpg',
    },
  ];

  return (
    <div className="certificates-page">
      <div className="certificates-header">
        <Award className="certificates-icon" />
        <div>
          <h1 className="certificates-title">Certificates & Achievements</h1>
          <p className="certificates-subtitle">Professional certifications and course completions</p>
        </div>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-header-card">
              <Award className="certificate-icon" />
              <span className="certificate-date">{cert.date}</span>
            </div>
            <h2 className="certificate-title">{cert.title}</h2>
            <p className="certificate-issuer">{cert.issuer}</p>
            <p className="certificate-description">{cert.description}</p>
            <div className="certificate-footer">
              <div className="certificate-actions">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                  title="View Certificate"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
