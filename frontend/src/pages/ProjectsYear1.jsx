import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import './Projects.css';

const ProjectsYear1 = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A full-featured e-commerce platform built with React and Node.js. Includes user authentication, product catalog, shopping cart, and payment integration. Implemented responsive design and optimized performance for mobile devices.',
      videoId: 'dQw4w9WgXcQ',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'An intuitive task management application with drag-and-drop functionality. Features include real-time updates, team collaboration, task prioritization, and deadline tracking. Built with modern web technologies for seamless user experience.',
      videoId: 'dQw4w9WgXcQ',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A comprehensive weather dashboard that displays current conditions and forecasts. Integrates with multiple weather APIs to provide accurate data. Features interactive charts, location search, and favorites system.',
      videoId: 'dQw4w9WgXcQ',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'CSS3'],
      githubLink: '#',
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <Code className="projects-icon" />
        <div>
          <h1 className="projects-title">NYP Year 1 Projects</h1>
          <p className="projects-subtitle">Building foundations in web development</p>
        </div>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.githubLink} className="project-link">
                <ExternalLink size={18} />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsYear1;
