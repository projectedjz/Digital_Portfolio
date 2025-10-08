import React from 'react';
import { Award, Download, ExternalLink } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Coursera - University of Hong Kong',
      date: 'June 2024',
      credentialId: 'CERT123456',
      description: 'Comprehensive course covering front-end and back-end technologies including React, Node.js, Express, and MongoDB.',
      link: '#',
    },
    {
      id: 2,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'March 2024',
      credentialId: 'CERT789012',
      description: 'In-depth certification covering ES6, functional programming, algorithms, and data structures in JavaScript.',
      link: '#',
    },
    {
      id: 3,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'January 2024',
      credentialId: 'AWS-CCP-2024',
      description: 'Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.',
      link: '#',
    },
    {
      id: 4,
      title: 'Python for Data Science',
      issuer: 'IBM - Cognitive Class',
      date: 'November 2023',
      credentialId: 'IBM-DS-2023',
      description: 'Introduction to Python programming for data analysis, including NumPy, Pandas, and data visualization.',
      link: '#',
    },
    {
      id: 5,
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'September 2023',
      credentialId: 'FCC-RWD-2023',
      description: 'Certification covering HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles.',
      link: '#',
    },
    {
      id: 6,
      title: 'Git and GitHub Essentials',
      issuer: 'LinkedIn Learning',
      date: 'August 2023',
      credentialId: 'LI-GIT-2023',
      description: 'Version control fundamentals, branching strategies, collaboration workflows, and GitHub features.',
      link: '#',
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
              <span className="credential-id">ID: {cert.credentialId}</span>
              <div className="certificate-actions">
                <a href={cert.link} className="certificate-link" title="View Certificate">
                  <ExternalLink size={18} />
                </a>
                <button className="certificate-download" title="Download Certificate">
                  <Download size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
