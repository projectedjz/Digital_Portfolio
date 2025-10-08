import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import './Projects.css';

const ProjectsYear2 = () => {
  const projects = [
    {
      id: 1,
      title: 'Social Media Platform',
      description: 'A full-stack social media application with real-time messaging, post creation, likes, comments, and user profiles. Implemented JWT authentication, image uploads, and responsive design. Deployed on cloud infrastructure with CI/CD pipeline.',
      videoId: 'dQw4w9WgXcQ',
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'AWS'],
      githubLink: '#',
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'An intelligent chatbot application leveraging OpenAI API for natural language processing. Features conversation history, context awareness, and multiple chat modes. Built with modern architecture and optimized for performance.',
      videoId: 'dQw4w9WgXcQ',
      technologies: ['React', 'Node.js', 'OpenAI API', 'Redis', 'Docker'],
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      description: 'A comprehensive fitness tracking application with workout logging, progress visualization, and goal setting. Includes nutrition tracking, exercise library, and social features. Implements data analytics and personalized recommendations.',
      videoId: 'dQw4w9WgXcQ',
      technologies: ['React Native', 'Firebase', 'Chart.js', 'TensorFlow.js'],
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Online Learning Platform',
      description: 'An educational platform with video streaming, quiz system, progress tracking, and certificate generation. Features admin dashboard, content management, and payment integration. Built with scalability and user experience in mind.',
      videoId: 'dQw4w9WgXcQ',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Stripe'],
      githubLink: '#',
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <Code className="projects-icon" />
        <div>
          <h1 className="projects-title">NYP Year 2 Projects</h1>
          <p className="projects-subtitle">Advanced full-stack development</p>
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

export default ProjectsYear2;
