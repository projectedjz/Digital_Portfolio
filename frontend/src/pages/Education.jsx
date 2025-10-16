import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen, Award, Rocket, Code, Target } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import TerminalCursor from '../components/TerminalCursor';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      year: 'April 2025 - Present',
      title: 'Diploma in Information Technology',
      institution: 'Nanyang Polytechnic (NYP)',
      description: 'Specializing in Software Development with focus on Full Stack Web Development, Database Management, and Cloud Computing.',
      icon: <Code size={32} />,
      achievements: [
        'Full Stack Web Development',
        'Software Engineering',
        'Advanced Programming',
        'Communication & Personal Branding'
      ],
      position: 'left'
    },
    {
      id: 2,
      year: 'April 2024 - March 2025',
      title: 'Common ICT Programme (CIP)',
      institution: 'Nanyang Polytechnic (NYP)',
      description: 'Completed foundation year with strong emphasis on programming fundamentals and technical skills.',
      icon: <Target size={32} />,
      achievements: [
        'Digital Business',
        'Principle of UI/UX Design',
        'App Development',
        'Web Development'
      ],
      position: 'right'
    },
    {
      id: 3,
      year: '2020 - 2023',
      title: 'Secondary Education',
      institution: 'Hougang Secondary School',
      description: 'Completed O-Level examinations with strong performance in Mathematics, Physics, and Chemistry.',
      icon: <BookOpen size={32} />,
      achievements: [
        'O-Level Examinations',
        'Strong Mathematics Foundation',
        'Physics & Chemistry Excellence',
        'Leadership in Co-Curricular Activities'
      ],
      position: 'left'
    },
    {
      id: 4,
      year: '2014 - 2019',
      title: 'Primary School',
      institution: 'Yio Chu Kang Primary School',
      description: 'Completed PSLE with strong performance in Mathematics and Sciences.',
      icon: <Rocket size={32} />,
      achievements: [
        'Strong Foundation in Mathematics & Sciences',
        'Leadership in Co-Curricular Activities',
        'National Math Olympiad',
        'EAGLES Award for Leadership Potential'
      ],
      position: 'right'
    },
    {
      id: 5,
      year: 'Future Goals',
      title: 'Career Aspirations',
      institution: 'Continuing Journey',
      description: 'Aiming to become a proficient Full Stack Developer and contribute to innovative tech solutions.',
      icon: <Rocket size={32} />,
      achievements: [
        'Master Modern Frameworks',
        'Build Production Applications',
        'Contribute to Open Source',
        'Continuous Learning & Growth'
      ],
      position: 'left'
    }
  ];

  const RoadmapItem = ({ item, index }) => {
    const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: false
    });

    const itemRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: itemRef,
      offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
      <div 
        ref={itemRef}
        className={`roadmap-item ${item.position}`}
      >
        <motion.div
          ref={ref}
          style={{ y, opacity, scale }}
          className={`roadmap-content ${inView ? 'in-view' : ''}`}
        >
          <div className="roadmap-card">
            <div className="roadmap-icon-wrapper">
              <div className="roadmap-icon">
                {item.icon}
              </div>
            </div>
            <div className="roadmap-year">{item.year}</div>
            <h3 className="roadmap-title">{item.title}</h3>
            <p className="roadmap-institution">{item.institution}</p>
            <p className="roadmap-description">{item.description}</p>
            <div className="roadmap-achievements">
              <h4 className="achievements-title">Key Highlights:</h4>
              <ul className="achievements-list">
                {item.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        <div className="roadmap-connector">
          <div className="connector-dot"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="education-page">
      <FloatingParticles />
      <TerminalCursor />
      <div className="education-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <GraduationCap className="hero-icon" size={64} />
          <h1 className="hero-title">Education Journey</h1>
          <p className="hero-subtitle">
            A roadmap of my academic achievements and learning milestones
          </p>
        </motion.div>
      </div>

      <div className="roadmap-container">
        <div className="roadmap-line"></div>
        {educationData.map((item, index) => (
          <RoadmapItem key={item.id} item={item} index={index} />
        ))}
      </div>

      <motion.div
        className="journey-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="footer-content">
          <Award className="footer-icon" size={48} />
          <h3 className="footer-title">Continuous Learning</h3>
          <p className="footer-text">
            Every step in this journey has shaped my passion for technology and innovation.
            The best is yet to come!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
