import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import './Projects.css';

const ProjectsYear1 = () => {
  const projects = [
    {
      id: 1,
      title: 'Web Development (SEM1)',
      projectType: 'Individual Project',
      projectName: 'E-commerce Jewelry Website',
      description: 'I developed a fully functional e-commerce website to sell jewelry items, featuring a Wishlist and shopping cart. Users can add items, proceed to checkout, and receive an e-receipt after completing their purchase. This project was built with responsive design, displaying 3 items per page for a smooth user experience.',
      videoId: 'UhTTbauNxiA',
      grade: 'Grade: A (School Project)',
      technologies: ['HTML', 'CSS', 'Javascript'],
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Principle Of UX and Design (SEM2)',
      projectType: 'Individual Project',
      projectName: 'Oasis Hotel - UX Design',
      description: 'Learned and applied Principles of UX Design to create an interactive prototype for Oasis Hotel. The design allows users to navigate the website, view hotel details, book rooms, and make payments seamlessly. Users can also make enquiries through the platform.',
      videoId: 'DqXuFSsNk00',
      grade: 'Grade: A (School Project)',
      technologies: ['Figma'],
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Digital Business (SEM1)',
      projectType: 'Project Type: Group of 4',
      projectName: 'Digitalising Value$Shop',
      description: 'As part of our school assignment, my team and I showcased the non-digitalized version of Value$Shop and its traditional snack-buying process. We then presented ideas to digitalize the shop, improving efficiency and user experience, ensuring it stays competitive in the evolving tech landscape.',
      videoId: 'X1iCZQG6l3Q',
      grade: 'Grade: A (School Project)',
      technologies: ['PowerPoint', 'Canva'],
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Data Analysis & Visualisation (SEM2)',
      projectType: 'Project Type: Pair Project',
      projectName: 'Data Analysis & Visualization - Insurance Claims',
      description: `In this project, I performed data pre-processing using Tableau Prep Builder to clean and structure the data for analysis. The main focus was to analyze customer data and insurance claims to uncover key insights.

The two primary questions addressed were:
1. Do customer's annual income and job industry affect the claim reasons and premium price?
2. Risk-based insurance adjustments based on customer's location and claim patterns.

I created a series of dashboards to display my findings, using Tableau to visualize the relationships between various factors and make data-driven conclusions. A storyboard was developed to guide the viewer through the key insights and show how customer demographics and behaviors impact insurance pricing and adjustments.`,
      videoId: 'BF_Vvf0XxSA',
      grade: 'Grade: A (School Project)',
      technologies: ['Tableau Prep Builder', 'Tableau'],
      githubLink: '#',
    },
    {
      id: 5,
      title: 'App Development (SEM2)',
      projectType: 'Project Type: Group of 5',
      projectName: 'App Development Project - Acorn website',
      description: `In this project, my team (4 members) developed a fully functional e-commerce clothing store using Python Flask for the backend and MySQL as the database. The website allows users to browse products, add items to their Wishlist and shopping cart, and proceed to checkout and payment. Additionally, the platform includes a parcel tracking system, enabling customers to view the status of their orders and receive an estimated delivery time. To drive sales, we implemented a timed flash sale feature, offering discounts on select items for a limited period, encouraging quick purchases.
      
      Unfortunately, there are no photos or videos due to the server we bought from being discontinued.`,
      videoId: '#',
      grade: 'Grade: B+ (School Project)',
      technologies: ['Python Flask', 'JinJa2', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      githubLink: '#',
    },
    {
      id: 6,
      title: 'Fundamentals & Innovation Enterprise (SEM1)',
      projectType: 'Project Type: Group of 5',
      projectName: 'UX Design Project - Prototype Product Development',
      description: `Over the course of the semester, my group and I applied UX design principles to develop a prototype product. We began by using Miro to plan the project, design the concept, and create a timeline for development. To better understand user needs, we crafted survey questions to gather feedback and insights.

      Using Affinity Clustering, we identified key user pain points and generated interview questions. We then built an empathy map based on the feedback from the interviews to better understand user perspectives. After ranking the pains and gains, we developed a Point of View (POV), refined it, and generated a list of How Might We questions.

      Next, we used the Creative Matrix to brainstorm three potential solutions, gathering feedback on each before selecting the best option. Finally, we created a storyboard to pitch the selected solution and visualize its application.`,
      videoId: 'urmWiyNfekI',
      grade: 'Grade: B (School Project)',
      technologies: ['Miro', 'Google Forms'],
      githubLink: '#',

    }
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
              {project.projectType && <p className="project-type">{project.projectType}</p>}
              {project.projectName && <h3 className="project-name">{project.projectName}</h3>}
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

export default ProjectsYear1;
