import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, GraduationCap, Briefcase, Code } from 'lucide-react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleEducationClick = () => {
    navigate('/education');
  };

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
      'Express.js',
      'React.js',
      'Node.js'
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
            Hello, I'm <span className="highlight">Ong Jun Zhen</span>
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
                &nbsp;&nbsp;name: <span className="code-string">'Ong Jun Zhen'</span>,
                <br />
                &nbsp;&nbsp;role: <span className="code-string">'Full Stack Dev'</span>,
                <br />
                &nbsp;&nbsp;passion: <span className="code-string">'Coding and Sports'</span>
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
          <div className="edu-card clickable" onClick={handleEducationClick}>
            <div className="edu-year">2023 - Present</div>
            <h3 className="edu-title">Diploma in Information Technology</h3>
            <p className="edu-school">Nanyang Polytechnic (NYP)</p>
            <p className="edu-desc">
              Specializing in Software Development with focus on Full Stack Web Development,
              Database Management, and Cloud Computing.
            </p>
            <div className="click-indicator">Click for more details →</div>
          </div>
          <div className="edu-card clickable" onClick={handleEducationClick}>
            <div className="edu-year">2019 - 2022</div>
            <h3 className="edu-title">Secondary Education</h3>
            <p className="edu-school">Hougang Secondary School</p>
            <p className="edu-desc">
              Completed O-Level examinations with strong performance in Mathematics,
              Chemistry, and Physics.
            </p>
            <div className="click-indicator">Click for more details →</div>
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
              <div className="timeline-date">January 2024 - February 2024</div>
              <h3 className="timeline-title">NTUC Fairprice, Punggol Plaza</h3>
              <p className="timeline-company">Part-Time - Restock Clerk</p>
              <ul className="timeline-list">
                <li>Restocked an average of 200+ grocery items per shift, monitoring shelf levels and rotating stock to maintain product freshness and availability.</li>
                <li>Assisted 10–15 customers daily with product location, dietary inquiries, and ingredient recommendations, enhancing their shopping experience.</li>
                <li>Conducted weekly inventory counts and reconciled stock discrepancies to support accurate stock management and minimize shrinkage.</li>
                <li>Delivered friendly, efficient service - helping manage checkout queues and resolving customer issues—contributing to a positive store environment and repeat business.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">November 2023 - Present</div>
              <h3 className="timeline-title">Orchid Country Club</h3>
              <p className="timeline-company">Part-Time - Banquet and Set Up Staff</p>
              <ul className="timeline-list">
                <li>Coordinate the setup for up to 5 events weekly - arranging tables, chairs, linens, floral displays according to detailed event diagrams.</li>
                <li>Serve food and beverages to banquet guests (50+ per event), maintaining a polished dining experience and responding promptly to special requests.</li>
                <li>Collaborate with a team of 6 to execute teardown and room resets within tight timeframes.</li>
                <li>Uphold Orchid Country Club’s hospitality standards by greeting guests, answering inquiries, and ensuring a warm, professional atmosphere throughout events. </li>
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
