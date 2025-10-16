import React from 'react';
import { Users, Award, Calendar, MapPin } from 'lucide-react';
import './Activities.css';

const CCA = () => {
  const ccaActivities = [
    {
      id: 1,
      title: 'SIT Club - Subcommittee',
      role: 'Subcommittee Member',
      period: 'May 2025 - Present',
      description: '...',
      achievements: [
        'Organized 3 major hackathons with 100+ participants',
        'Conducted 15+ workshops on web development',
        'Led a team of 10 developers on club projects',
      ],
      images: [
        'https://via.placeholder.com/400x300/1a1a1a/39ff14?text=Tech+Club+Event+1',
        'https://via.placeholder.com/400x300/1a1a1a/39ff14?text=Tech+Club+Event+2',
        'https://via.placeholder.com/400x300/1a1a1a/39ff14?text=Tech+Club+Event+3',
      ],
    },
    {
      id: 2,
      title: 'Football CCA - Secondary School',
      role: 'Team Vice-Captain',
      period: '2020 - 2023',
      description: '...',
      achievements: [
        'League 2 2023',
        '...',
        '...',
      ],
      images: [
        'https://via.placeholder.com/400x300/1a1a1a/39ff14?text=Hackathon+Winner',
        'https://via.placeholder.com/400x300/1a1a1a/39ff14?text=Team+Presentation',
        'https://via.placeholder.com/400x300/1a1a1a/39ff14?text=Award+Ceremony',
      ],
    },
    {
      id: 3,
      title: 'Football CCA - Primary School',
      role: 'Team Captain',
      period: '2023 - Present',
      description: '...',
      achievements: [
        'EAGLES Award 2019',
        'Participated in 2 major open house events',
        'Met Fandi Ahmad during Milo Camp Event',
      ],
      images: [
        'https://via.placeholder.com/400x300/1a1a1a/39ff14?text=Open+House+Event',
        'https://via.placeholder.com/400x300/1a1a1a/39ff14?text=Campus+Tour',
        'https://via.placeholder.com/400x300/1a1a1a/39ff14?text=Student+Mentoring',
      ],
    },
    {
      id: 4,
      title: 'Volunteering Activities',
      role: 'Active Volunteer',
      period: '2022 - Present',
      description: 'Engaging in community service and volunteering activities including coding workshops for underprivileged youth, beach cleanups, and elderly care programs. Committed to giving back to the community.',
      achievements: [
        'Taught coding to 50+ students from underprivileged backgrounds',
        'Participated in 10+ community service events',
        'Contributed 100+ volunteer hours',
      ],
      images: [
        'https://via.placeholder.com/400x300/1a1a1a/39ff14?text=Coding+Workshop',
        'https://via.placeholder.com/400x300/1a1a1a/39ff14?text=Community+Service',
        'https://via.placeholder.com/400x300/1a1a1a/39ff14?text=Volunteer+Team',
      ],
    },
  ];

  return (
    <div className="activities-page">
      <div className="activities-header">
        <Users className="activities-icon" />
        <div>
          <h1 className="activities-title">Co-Curricular Activities (CCA)</h1>
          <p className="activities-subtitle">Leadership, teamwork, and community involvement</p>
        </div>
      </div>

      <div className="cca-list">
        {ccaActivities.map((activity) => (
          <div key={activity.id} className="cca-card">
            <div className="cca-header-section">
              <div className="cca-title-section">
                <h2 className="cca-title">{activity.title}</h2>
                <div className="cca-meta">
                  <span className="cca-role">
                    <Award size={16} />
                    {activity.role}
                  </span>
                  <span className="cca-period">
                    <Calendar size={16} />
                    {activity.period}
                  </span>
                </div>
              </div>
            </div>

            <p className="cca-description">{activity.description}</p>

            <div className="cca-achievements">
              <h3 className="achievements-title">Key Achievements</h3>
              <ul className="achievements-list">
                {activity.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="cca-gallery">
              <h3 className="gallery-title">Photo Gallery</h3>
              <div className="gallery-grid">
                {activity.images.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img src={image} alt={`${activity.title} ${index + 1}`} />
                    <div className="image-overlay">
                      <MapPin size={20} />
                      <span>Replace with your photo</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CCA;
