import React from 'react';
import { Heart, Play } from 'lucide-react';
import './Activities.css';

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      title: 'Coding Personal Projects',
      description: 'I love building side projects in my free time. From web apps to mobile applications, coding is not just my career but also my passion. Each project teaches me something new and keeps me updated with the latest technologies.',
      videoId: 'dQw4w9WgXcQ',
      tags: ['Web Development', 'App Development', 'Open Source'],
    },
    {
      id: 2,
      title: 'Gaming & Esports',
      description: 'Gaming helps me relax and unwind after a long day. I enjoy both competitive and casual games, and I appreciate the strategic thinking and teamwork involved in esports. It also keeps me connected with friends around the world.',
      videoId: 'dQw4w9WgXcQ',
      tags: ['Strategy Games', 'Team Play', 'Problem Solving'],
    },
    {
      id: 3,
      title: 'Photography & Videography',
      description: 'Capturing moments through the lens is a creative outlet for me. I enjoy experimenting with different angles, lighting, and editing techniques. Photography teaches me to see the world from different perspectives.',
      videoId: 'dQw4w9WgXcQ',
      tags: ['Digital Photography', 'Photo Editing', 'Storytelling'],
    },
    {
      id: 4,
      title: 'Music Production',
      description: 'Creating and mixing music is a hobby that combines my love for technology and art. I experiment with different software, sound design, and production techniques. Music production allows me to express creativity in unique ways.',
      videoId: 'dQw4w9WgXcQ',
      tags: ['Music Composition', 'Sound Design', 'Audio Engineering'],
    },
    {
      id: 5,
      title: 'Fitness & Sports',
      description: 'Staying active and healthy is important to me. Whether it\'s hitting the gym, playing sports, or outdoor activities, physical fitness helps me maintain energy and focus. It\'s also a great way to challenge myself and set personal goals.',
      videoId: 'dQw4w9WgXcQ',
      tags: ['Gym Training', 'Team Sports', 'Outdoor Activities'],
    },
    {
      id: 6,
      title: 'Reading Tech Blogs & Learning',
      description: 'I enjoy staying updated with the latest trends in technology. Reading tech blogs, watching tutorials, and taking online courses helps me continuously improve my skills and discover new tools and frameworks.',
      videoId: 'dQw4w9WgXcQ',
      tags: ['Continuous Learning', 'Tech News', 'Skill Development'],
    },
  ];

  return (
    <div className="activities-page">
      <div className="activities-header">
        <Heart className="activities-icon" />
        <div>
          <h1 className="activities-title">Hobbies & Interests</h1>
          <p className="activities-subtitle">What I love to do in my free time</p>
        </div>
      </div>

      <div className="hobbies-list">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="hobby-card">
            <div className="hobby-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${hobby.videoId}`}
                title={hobby.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-overlay">
                <Play className="play-icon" />
              </div>
            </div>
            <div className="hobby-content">
              <h2 className="hobby-title">{hobby.title}</h2>
              <p className="hobby-description">{hobby.description}</p>
              <div className="hobby-tags">
                {hobby.tags.map((tag, index) => (
                  <span key={index} className="hobby-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
