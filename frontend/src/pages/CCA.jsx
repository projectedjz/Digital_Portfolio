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
      description: `In my role with the School of Information Technology's subcommittee, I earned my position by completing key leadership programs, including Camp Nautilus and Social Cohesion Training. My participation in the Freshmen Orientation training also allowed me to cultivate strong mentorship and interpersonal skills essential for student engagement. I am now poised to support the committee’s outreach and publicity initiatives by applying these communication and teamwork skills to promote school events and build a vibrant community.`,
      achievements: [
        'Social Cohesion Training 2025',
        'Camp Nauttilus 2025',
        'FMO Training 2025 - Student Mentor',
      ],
      images: [
        '/CCA/SCT_2025.jpeg',
        '/CCA/Camp_Nautilus_2025.jpeg',
      ],
    },
    {
      id: 2,
      title: 'Football CCA - Secondary School',
      role: 'Team Vice-Captain',
      period: '2020 - 2023',
      description: `After finishing Primary School, I joined Hougang Secondary School. Since I had a good run in Primary school, I decide to continue my career as a footballer. However, COVID-19 struck and it was a hard time to train as I had to zoom call and physical training at home. Gradually, the lockdown measure had lighten up and I was able to play again in 2022. Unfortunately, without any physical training with my teammates, it was much harder to win since we had no chemistry or even a chance to really get to know each other. 

      In the Year 2023, my last year playing competitive football, i gave it my all with my juniors and won 5/6 of our first round matches, which boosted us to TOP 32 school in Singapore out of 147 Schools - League 2. Yet again, bad luck struck. I was down with a flu when the team needed me the most, which cost us to lose the in second round.
      
      Even though I may not have won any champions or titles, but I have learnt a lot of things from my peers and through the games itself. Whenever I make a mistake, the only way to redeem ourselves is to get back up and keep fighting. There were many times my team was losing but we end up winning was because of our determination and perseverance. I, as the Vice Captain of the team, gave many advices to my peers to help them improve their skills and also encourage them to be a better team player.`,
      achievements: [
        'League 2 2023',
        'Team Vice-Captain 2020 - 2023',
        'Represented in National School Games 2022-2023',
      ],
      images: [
        '/CCA/Football-secondary-1.png',
        '/CCA/Football-secondary-2.png',
      ],
    },
    {
      id: 3,
      title: 'Football CCA - Primary School',
      role: 'Team Captain',
      period: '2023 - Present',
      description: `Started my career in Primary 3 by joining the football CCA in Yio Chu Kang Primary School (YCKPS) because I was so passionate and determined to win. In Primary 4, I was chosen to be the Team Captain because I embodied the role of a lion leading a group of sheep - someone who could inspire and guide the team with confidence and resolve. The coach saw that I was very determine to learn and improve. 

      Even though I was a much smaller size than everybody in the team, I was the most competitive one. That drive and determination helped me push through challenges and stand out in any group, proving that size doesn't define strength or spirit - "Heart over height". 

      Being chosen as team captain, despite being the smallest, taught me that leadership isn't about being the best player—it's about inspiring and guiding others. You don’t have to be the best to lead; it's about motivating the team, making tough decisions, and keeping everyone focused. This experience gave me valuable leadership skills, like managing challenges and fostering teamwork, which will continue to serve me in the future.`,
      achievements: [
        'EAGLES Award 2019',
        'Participated in 2 major open house events',
        'Met Fandi Ahmad during Milo Camp Event',
      ],
      images: [
        '/CCA/Football-Primary.jpeg',
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
