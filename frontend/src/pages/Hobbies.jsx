import React from 'react';
import { Heart, Play } from 'lucide-react';
import './Activities.css';

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      title: 'Basketball',
      description: `During my free time, when I’m not coding, I dedicate a significant portion of my week to playing basketball with my friends. Every Thursday, Saturday, and Sunday, you’ll find me on the court, enjoying the game and staying active. Even during busy school weeks, I prioritize basketball by carefully planning my schedule to ensure I can make time to hang out and play with my friends.`,
      videoId: 'OWJ6rGx7f60',
    },
    {
      id: 2,
      title: 'Basketball',
      description: `While I may be smaller in stature compared to my friends (who are usually a head taller than me), I’ve learned to make the most of my size by focusing on my agility and quickness. On offense, I use my speed to make sharp cuts, drive to the basket, and find creative ways to finish around taller defenders. On defense, I rely on my agility to stay in front of my opponents, anticipate their moves, and use my smaller frame to my advantage for stealing the ball or making quick recoveries. The game pushes me to think fast and stay one step ahead, and I love the challenge that comes with playing against people who have a physical advantage.`,
      videoId: 'KPgoSU7bfbk',
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
            <div className="hobby-video" style={{ width: '550px', aspectRatio: '16/9' }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${hobby.videoId}`}
                title={hobby.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="hobby-content">
              <h2 className="hobby-title">{hobby.title}</h2>
              <p className="hobby-description">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
