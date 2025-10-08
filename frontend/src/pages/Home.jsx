import React from 'react';
import { User, GraduationCap, Briefcase, Code } from 'lucide-react';
import './Home.css';

const Home = () => {
  const skillsData = {
    softwareTools: [
      'Tableau',
      'Tableau Prep Builder',
      'Orange',
      'Visual Studio Code',
      'Pycharm',
      'Github',
      'MySQL Workbench',
      'Miro',
      'Figma'
    ],
    programmingLanguages: [
      'HTML',
      'CSS',
      'Javascript',
      'Python',
      'C#',
      'SQL',
      'Node.js',
      'React.js'
    ],
    genericSkills: [
      'Time Management',
      'Communication',
      'Teamwork',
      'Creativity',
      'Adaptability',
      'Patience',
      'Leadership',
      'Teamwork',
      'Analytical thinking'
    ]
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-tag">&lt;developer/&gt;</div>
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Your Name</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer | NYP Student | Tech Enthusiast
          </p>
          <div className="hero-buttons">
            <a href="#about" className="btn-primary">Learn More</a>
            <a href="/contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-body">
              <code>
                <span className="code-keyword">const</span> developer = {'{'}
                <br />
                &nbsp;&nbsp;name: <span className="code-string">'Your Name'</span>,
                <br />
                &nbsp;&nbsp;role: <span className="code-string">'Full Stack Dev'</span>,
                <br />
                &nbsp;&nbsp;passion: <span className="code-string">'Building Amazing Things'</span>
                <br />
                {'}'};
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-header">
          <User className="section-icon" />
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-container">
          <div className="about-image-wrapper">
            <div className="profile-image-container">
              <img 
                src="https://via.placeholder.com/300/1a1a1a/39ff14?text=Your+Photo" 
                alt="Profile" 
                className="profile-image"
              />
              <div className="image-border"></div>
            </div>
          </div>
          <div className="about-content">
            <p className="about-text">
              I am a passionate Full Stack Developer currently pursuing my studies at Nanyang Polytechnic.
              With a strong foundation in web technologies and a keen interest in creating innovative solutions,
              I strive to build applications that make a difference.
            </p>
            <p className="about-text">
              My journey in technology started with curiosity and has evolved into a commitment to continuous
              learning and excellence. I enjoy tackling challenging problems and collaborating with others
              to bring ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section education-section">
        <div className="section-header">
          <GraduationCap className="section-icon" />
          <h2 className="section-title">Education</h2>
        </div>
        <div className="education-cards">
          <div className="edu-card">
            <div className="edu-year">2023 - Present</div>
            <h3 className="edu-title">Diploma in Information Technology</h3>
            <p className="edu-school">Nanyang Polytechnic (NYP)</p>
            <p className="edu-desc">
              Specializing in Software Development with focus on Full Stack Web Development,
              Database Management, and Cloud Computing.
            </p>
          </div>
          <div className="edu-card">
            <div className="edu-year">2019 - 2022</div>
            <h3 className="edu-title">Secondary Education</h3>
            <p className="edu-school">Example Secondary School</p>
            <p className="edu-desc">
              Completed O-Level examinations with strong performance in Mathematics,
              Science, and Computing.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section">
        <div className="section-header">
          <Briefcase className="section-icon" />
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="experience-timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Jun 2024 - Aug 2024</div>
              <h3 className="timeline-title">Web Development Intern</h3>
              <p className="timeline-company">Tech Company Pte Ltd</p>
              <ul className="timeline-list">
                <li>Developed responsive web applications using React.js and Node.js</li>
                <li>Collaborated with senior developers on client projects</li>
                <li>Implemented RESTful APIs and integrated third-party services</li>
                <li>Participated in code reviews and agile development practices</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Jan 2024 - May 2024</div>
              <h3 className="timeline-title">Student Project Lead</h3>
              <p className="timeline-company">NYP School Project</p>
              <ul className="timeline-list">
                <li>Led a team of 4 students in developing a mobile application</li>
                <li>Coordinated project timelines and delegated tasks effectively</li>
                <li>Presented project outcomes to faculty and industry professionals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="skills-header-center">
          <h2 className="skills-title-main">Skills</h2>
        </div>
        <div className="skills-columns">
          <div className="skills-column">
            <h3 className="skills-column-title">Software Tools</h3>
            <ul className="skills-list">
              {skillsData.softwareTools.map((skill, index) => (
                <li key={index} className="skills-list-item">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-column">
            <h3 className="skills-column-title">Programming Language</h3>
            <ul className="skills-list">
              {skillsData.programmingLanguages.map((skill, index) => (
                <li key={index} className="skills-list-item">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-column">
            <h3 className="skills-column-title">Generic Skills</h3>
            <ul className="skills-list">
              {skillsData.genericSkills.map((skill, index) => (
                <li key={index} className="skills-list-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
