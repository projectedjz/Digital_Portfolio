import React, { useState, useEffect, useRef } from 'react';
import './CodeTrailCursor.css';

const CODE_SNIPPETS = [
  'const', 'let', '()', '{}', '[]', '=>', '<div>', 'import', 'export', 
  'useEffect', 'useState', '<h1>', 'git', 'css', 'jsx', 'null', 'true', 
  'false', '&&', '||', '!', 'async', 'await', 'Promise', '...'
];

const COLORS = [
  '#569cd6', '#4ec9b0', '#c586c0', '#ce9178', '#dcdcaa', '#9cdcfe',
];

const MAX_TRAIL_COUNT = 10;
const EASING = 0.15;
const SPAWN_THRESHOLD = 25;
const IDLE_TIMEOUT = 0;
const FADE_DELAY = 25;

const CodeTrailCursor = () => {
  const [trail, setTrail] = useState([]);
  
  const trailRef = useRef(trail);
  
  useEffect(() => {
    trailRef.current = trail;
  }, [trail]);

  useEffect(() => {
    const mousePos = { x: -100, y: -100 };
    const followerPos = { x: -100, y: -100 };
    const lastSpawnPos = { x: -100, y: -100 };
    let animationFrameId;
    let idleTimer;

    const setElementFading = (id) => {
      setTrail(currentTrail => 
        currentTrail.map(el => el.id === id ? { ...el, fading: true } : el)
      );
    };

    const startFadeOutSequence = () => {
      const currentTrail = trailRef.current;
      currentTrail.forEach((element, index) => {
        setTimeout(() => {
          setElementFading(element.id);
        }, index * FADE_DELAY);
      });
    };

    const handleMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(startFadeOutSequence, IDLE_TIMEOUT);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      followerPos.x += (mousePos.x - followerPos.x) * EASING;
      followerPos.y += (mousePos.y - followerPos.y) * EASING;

      const spawnDx = followerPos.x - lastSpawnPos.x;
      const spawnDy = followerPos.y - lastSpawnPos.y;
      const distance = Math.sqrt(spawnDx * spawnDx + spawnDy * spawnDy);

      if (distance >= SPAWN_THRESHOLD) {
        lastSpawnPos.x = followerPos.x;
        lastSpawnPos.y = followerPos.y;
        
        const newElement = {
          id: Date.now() + Math.random(),
          x: followerPos.x,
          y: followerPos.y,
          fading: false,
          snippet: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
        
        setTrail(prev => {
          const updatedTrail = [...prev, newElement];
          if (updatedTrail.length > MAX_TRAIL_COUNT) {
            return updatedTrail.slice(1);
          }
          return updatedTrail;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(idleTimer);
    };
  }, []);

  const handleFadeComplete = (id) => {
    setTrail(currentTrail => currentTrail.filter(el => el.id !== id));
  };

  return (
    <>
      {trail.map((element) => (
        <span
          key={element.id}
          className={`code-trail-element ${element.fading ? 'fading' : ''}`}
          onTransitionEnd={() => handleFadeComplete(element.id)}
          style={{
            color: element.color,
            left: `${element.x}px`,
            top: `${element.y}px`,
          }}
        >
          {element.snippet}
        </span>
      ))}
    </>
  );
};

export default CodeTrailCursor;