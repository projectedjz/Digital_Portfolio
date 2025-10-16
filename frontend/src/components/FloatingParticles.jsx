import React, { useEffect, useState } from 'react';
import './FloatingParticles.css';

const codeSnippets = [
  '</>',
  '{}',
  'function',
  'const',
  'let',
  '=>',
  'return',
  'import',
  'export',
  'class',
  'async',
  'await',
  '( )',
  '[ ]',
  'if',
  'else',
  'else if',
  'switch',
  'case',
  'for',
  'while',
  'try',
  'catch',
  '&&',
  '||',
  '!',
  '===',
  '!==',
  '? :',
  '...',
  '?.',
  '??',
  'true',
  'false',
  'null',
  'undefined',
  'typeof',
  '``',
  '${}',
  '.map()',
  '.filter()',
  '.reduce()',
  'this',
  'new',
  'extends',
  'super',
  'useState',
  'useEffect',
  'props',
  '<div>',
  'className',
  'onClick',
];

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      left: Math.random() * 100,
      animationDuration: 15 + Math.random() * 10,
      animationDelay: Math.random() * 5,
      fontSize: 12 + Math.random() * 8,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="floating-particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            left: `${particle.left}%`,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.animationDelay}s`,
            fontSize: `${particle.fontSize}px`,
          }}
        >
          {particle.text}
        </div>
      ))}
    </div>
  );
};

export default FloatingParticles;
