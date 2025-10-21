import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import './Projects.css';

const ProjectsYear2 = () => {
  const projects = [
    {
      id: 1,
      title: 'Advanced Programming Pokémon Game C# (SEM1)',
      projectType: 'Project Type: Individual Project',
      projectName: 'Pokemon Pocket Console Application',
      description: `Developed a Pokemon Pocket Console Application game where users can interact with a virtual Pokemon world. The game allows players to:

      1. Add new Pokemon to their collection
      2. List their inventory and view details of collected Pokemon
      3. Access the Pokedex to discover new specie
      4. Evolve Pokemon by checking for evolvable ones
      5. Release Pokemon from the inventory
      6. Quit the game

      The backend is powered by SQLite, enabling the storage of Pokemon data and player progress. The application is built entirely in C#, with a focus on object-oriented programming principles. This project helped me sharpen my coding skills and my ability to work with databases.`,
      videoId: 'dFCvU6x1B20',
      grade: 'Grade: A (School Project)',
      technologies: ['C#', 'SQLite'],
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Software Engineering (SEM 1)',
      projectType: 'Project Type: Group of 5',
      projectName: 'Scrum Project -The Smart Campus Navigation App',
      description: `In this Scrum-based project, my team and I developed a one-stop navigation solution for a large university campus, aiming to address the issue of students navigating the expansive grounds. Our goal was to create a unified system that provides real-time guidance and support for students on campus.

      We followed Scrum practices throughout the project, starting with crafting a Product Vision Statement to define the core objectives of the system. We then employed User Story Mapping to organize the key features from a user-centric perspective, followed by the creation of Product Backlog Items (PBIs).

      1. Story Point Estimation was used, applying Planning Poker to estimate effort for each feature.
      2. The Product Backlog was ranked, and we selected high-priority features for the first sprint, setting a clear Sprint Goal.
      3. We defined a Definition of Done (DoD) to ensure each feature met quality standards upon completion.
      
      This project not only provided hands-on experience in applying Agile and Scrum methodologies but also helped deliver a comprehensive, user-friendly solution for a real-world campus challenge.`,
      videoId: 'Swu7XoE-VO4',
      grade: 'Grade: A (School Project)',
      technologies: ['Miro', 'Google Docs'],
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Full-Stack Development Project (SEM 1) ',
      projectType: 'Project Type: Group of 5',
      projectName: 'Full-Stack Project – Ng Guan Seng Woodworking Industrial PTE LTD',
      description: `In this full-stack development project, my team and I built a web application to address the operational inefficiencies faced by Ng Guan Seng Woodworking Industrial PTE LTD. The company relied heavily on manual Excel updates, which were time-consuming and prone to error when managing large volumes of data. Our goal was to eliminate repetitive work and provide a streamlined platform for data management.

      We designed a centralized system that enabled CRUD operations (Create, Read, Update, Delete) across all tables, reducing the need for manual spreadsheet handling and improving data accessibility. The database was hosted on Amazon Web Services Relational Database Service (AWS RDS) to ensure scalability, reliability, and secure access.

      Each group member was also responsible for integrating a Generative AI feature, including:
      1. Forecasting of customer purchases
      2. Email reader
      3. Forecasting of opening stocks for pallet inventory
      4. Overview analysis write-up
      5. Intelligent chatbot assistant
      
      My individual contribution focused on the Pallet Inventory section. I implemented a QR code generator and scanner feature that allowed employees to attach QR codes to pallets. By scanning these codes with a handheld device, staff could instantly retrieve details such as pallet ID and wood type, minimizing manual data entry and enhancing traceability.
      
      This project culminated in a live client presentation, where we showcased the platform’s capabilities. The client was highly impressed with our solution and its potential to significantly improve operational efficiency.

      This project not only strengthened my technical skills in full-stack development, database integration, and cloud deployment, but also gave me hands-on experience in applying digital solutions to a real-world business case through direct client engagement.`,
      videoId: '#',
      grade: 'Grade: A (School Project)',
      technologies: ['Node.js', 'Express.js', 'React.js', 'MySQL', 'AWS SageMaker', 'Figma', 'AWS RDS', 'Github'],
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
              <p className="project-type">{project.projectType}</p>
              <h3 className="project-name">{project.projectName}</h3>
              <p className="project-description">{project.description}</p>
              {project.grade && <p className="project-grade">{project.grade}</p>}
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsYear2;
