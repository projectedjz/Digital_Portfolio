import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const binarySequence = '01001100 01001111 01000001 01000100 01001001 01001110 01000111';
  const finalText = 'LOADING';

  useEffect(() => {
    let currentIndex = 0;
    const totalDuration = 2000;
    const binaryDuration = 600;
    const transitionDuration = 300;

    const binaryInterval = setInterval(() => {
      if (currentIndex < binarySequence.length) {
        setDisplayText(binarySequence.slice(0, currentIndex + 1));
        currentIndex++;
      }
    }, binaryDuration / binarySequence.length);

    setTimeout(() => {
      clearInterval(binaryInterval);
      setDisplayText(finalText);
    }, binaryDuration);

    setTimeout(() => {
      onComplete();
    }, totalDuration);

    return () => clearInterval(binaryInterval);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-text">{displayText}</div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
