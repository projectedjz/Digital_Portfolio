import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Star } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import TerminalCursor from '../components/TerminalCursor';
import './Education.css';

const Education = () => {
  const educationDetails = [
    {
      id: 1,
      period: "April 2024 - Present",
      title: "Diploma in Information Technology",
      institution: "Nanyang Polytechnic (NYP)",
      location: "Singapore",
      description: "Currently pursuing Year 2 of the Diploma program, having completed the Common ICT Programme in Year 1 with strong academic performance.",
      achievements: [
        "Director's List (Year 1 Semester 2) - 3.73 GPA",
        "Distinction for Software Engineering Module",
        "School of Information Technology Club - Sub-community for Publicity Department"
      ],
      year1Subjects: [
        "Fundamentals Of Innovation and Enterprise",
        "Law and Ethics Of IT",
        "Effective Communication Skills",
        "Web Development",
        "Programming Essential",
        "Computing Mathematics",
        "Infocom Security",
        "Principle of UX Design",
        "Business Statistics",
        "Digital Business",
        "Data Analysis and Visualisation",
        "App Development Project",
        "Network Technology"
      ],
      year2Subjects: [
        "Software Engineering",
        "Data Structures and Algorithms",
        "Full Stack Development Project",
        "Advanced Programming",
        "Database Management System",
        "Communication and Personal Branding"
      ],
      academicPerformance: {
        overallCGPA: "3.55",
        year1Sem1: "3.28",
        year1Sem2: "3.73",
        year2Sem1: "3.64"
      },
      activities: [
        "School of Information Technology Club - Sub-community for Publicity Department"
      ],
      expectedGraduation: "2026"
    },
    {
      id: 2,
      period: "2020 - 2023",
      title: "GCE 'O' Level Certificate",
      institution: "Hougang Secondary School",
      location: "Singapore",
      description: "Completed secondary education with strong academic performance and active participation in co-curricular activities.",
      achievements: [
        "SJPO Individual - Honorable Mention (Singapore Junior Physics Olympiad 2022)",
        "SJPO Team - Participation (Singapore Junior Physics Olympiad 2022)",
        "Top 10% in 2022 and 2023 (Academics)",
        "Top 25% in 2021 (Academics)",
        "Singapore Math Kangaroo Participation in 2022 and 2023",
        "American Mathematics Competition 8 Participation",
        "NYP Computational Thinking Participation Certificate in 2023"
      ],
      activities: [
        "Football (Vice-captain)"
      ],
      competitions: [
        "Singapore Junior Physics Olympiad 2022 - Individual Honorable Mention",
        "Singapore Junior Physics Olympiad 2022 - Team Participation",
        "Singapore Math Kangaroo 2022 & 2023",
        "American Mathematics Competition 8",
        "NYP Computational Thinking 2023"
      ]
    },
    {
      id: 3,
      period: "2014 - 2019",
      title: "Primary School Leaving Examination (PSLE) Certificate",
      institution: "Yio Chu Kang Primary School",
      location: "Singapore",
      description: "Completed primary education with active leadership in sports and participation in academic competitions.",
      achievements: [
        "EAGLES Award",
        "National Mathematical Olympiad of Singapore Participation"
      ],
      activities: [
        "Football (Captain)"
      ],
      competitions: [
        "National Mathematical Olympiad of Singapore"
      ]
    }
  ];

  return (
    <div className="education-page">
      <FloatingParticles />
      <TerminalCursor />
      {/* Header Section */}
      <section className="education-hero">
        <div className="education-hero-content">
          <GraduationCap className="hero-icon" />
          <h1 className="education-main-title">My Educational Journey</h1>
          <p className="education-subtitle">
            A comprehensive overview of my academic achievements and learning experiences
          </p>
        </div>
      </section>

      {/* Detailed Education Cards */}
      <section className="education-details">
        <div className="education-container">
          {educationDetails.map((edu, index) => (
            <div key={edu.id} className={`education-detail-card ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="education-timeline-marker">
                <div className="timeline-dot"></div>
                {index < educationDetails.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="education-card-content">
                {/* Header */}
                <div className="education-card-header">
                  <div className="education-period">
                    <Calendar className="period-icon" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="education-location">
                    <MapPin className="location-icon" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Main Info */}
                <div className="education-main-info">
                  <h2 className="education-degree">{edu.title}</h2>
                  <h3 className="education-institution">{edu.institution}</h3>
                  <p className="education-description">{edu.description}</p>
                </div>

                {/* Expected Graduation */}
                {edu.expectedGraduation && (
                  <div className="graduation-info">
                    <div className="graduation-item">
                      <Calendar className="graduation-icon" />
                      <span>Expected Graduation: {edu.expectedGraduation}</span>
                    </div>
                  </div>
                )}

                {/* Achievements */}
                <div className="education-section">
                  <h4 className="section-title">
                    <Award className="section-icon" />
                    Achievements
                  </h4>
                  <ul className="achievements-list">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="achievement-item">{achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* Academic Performance (for NYP) */}
                {edu.academicPerformance && (
                  <div className="education-section">
                    <h4 className="section-title">
                      <Star className="section-icon" />
                      Academic Performance
                    </h4>
                    <div className="performance-grid">
                      <div className="performance-item-detailed">
                        <span className="performance-label">Overall CGPA:</span>
                        <span className="performance-value">{edu.academicPerformance.overallCGPA}</span>
                      </div>
                      <div className="performance-item-detailed">
                        <span className="performance-label">Year 1 Sem 1:</span>
                        <span className="performance-value">{edu.academicPerformance.year1Sem1}</span>
                      </div>
                      <div className="performance-item-detailed">
                        <span className="performance-label">Year 1 Sem 2:</span>
                        <span className="performance-value">{edu.academicPerformance.year1Sem2}</span>
                      </div>
                      <div className="performance-item-detailed">
                        <span className="performance-label">Year 2 Sem 1:</span>
                        <span className="performance-value">{edu.academicPerformance.year2Sem1}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Year 1 Subjects (for NYP) */}
                {edu.year1Subjects && (
                  <div className="education-section">
                    <h4 className="section-title">
                      <BookOpen className="section-icon" />
                      Year 1 - Common ICT Programme
                    </h4>
                    <div className="subjects-grid">
                      {edu.year1Subjects.map((subject, idx) => (
                        <div key={idx} className="subject-tag year1">{subject}</div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Year 2 Subjects (for NYP) */}
                {edu.year2Subjects && (
                  <div className="education-section">
                    <h4 className="section-title">
                      <BookOpen className="section-icon" />
                      Year 2 - Diploma in Information Technology
                    </h4>
                    <div className="subjects-grid">
                      {edu.year2Subjects.map((subject, idx) => (
                        <div key={idx} className="subject-tag year2">{subject}</div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Subjects (for other schools) */}
                {edu.subjects && (
                  <div className="education-section">
                    <h4 className="section-title">
                      <BookOpen className="section-icon" />
                      Key Subjects
                    </h4>
                    <div className="subjects-grid">
                      {edu.subjects.map((subject, idx) => (
                        <div key={idx} className="subject-tag">{subject}</div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Competitions */}
                {edu.competitions && (
                  <div className="education-section">
                    <h4 className="section-title">
                      <Award className="section-icon" />
                      Competitions & Certifications
                    </h4>
                    <ul className="competitions-list">
                      {edu.competitions.map((competition, idx) => (
                        <li key={idx} className="competition-item">{competition}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Activities */}
                {edu.activities && (
                  <div className="education-section">
                    <h4 className="section-title">
                      <Users className="section-icon" />
                      Co-Curricular Activities
                    </h4>
                    <ul className="activities-list">
                      {edu.activities.map((activity, idx) => (
                        <li key={idx} className="activity-item">{activity}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="future-goals">
        <div className="goals-container">
          <h2 className="goals-title">Future Educational Goals</h2>
          <div className="goals-grid">
            <div className="goal-card">
              <BookOpen className="goal-icon" />
              <h3>Continuous Learning</h3>
              <p>Pursuing additional certifications in cloud computing and cybersecurity</p>
            </div>
            <div className="goal-card">
              <Award className="goal-icon" />
              <h3>Professional Certifications</h3>
              <p>Planning to obtain AWS and Azure cloud certifications</p>
            </div>
            <div className="goal-card">
              <Users className="goal-icon" />
              <h3>Knowledge Sharing</h3>
              <p>Contributing to open-source projects and tech community</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;