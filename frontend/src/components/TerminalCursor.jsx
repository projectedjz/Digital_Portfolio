import React, { useEffect, useState } from 'react';
import './TerminalCursor.css';

const codeLines = [
  "const portfolio = 'awesome';",
  "function buildFuture() {}",
  "let innovation = true;",
  "import { success } from 'hard-work';",
  "const dream = new Reality();",
  "export default Excellence;",
  "async function achieve() {}",
  "return <YourDreams />;",
];

const TerminalCursor = () => {
  const [cursors, setCursors] = useState([]);

  useEffect(() => {
    const createCursor = () => {
      const newCursor = {
        id: Date.now(),
        text: codeLines[Math.floor(Math.random() * codeLines.length)],
        top: 10 + Math.random() * 70,
        left: 5 + Math.random() * 60,
      };

      setCursors((prev) => [...prev, newCursor]);

      setTimeout(() => {
        setCursors((prev) => prev.filter((c) => c.id !== newCursor.id));
      }, 4000);
    };

    const interval = setInterval(createCursor, 8000);
    createCursor();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-cursor-container">
      {cursors.map((cursor) => (
        <div
          key={cursor.id}
          className="terminal-cursor"
          style={{
            top: `${cursor.top}%`,
            left: `${cursor.left}%`,
          }}
        >
          <span className="cursor-text">{cursor.text}</span>
          <span className="cursor-blink">|</span>
        </div>
      ))}
    </div>
  );
};

export default TerminalCursor;
