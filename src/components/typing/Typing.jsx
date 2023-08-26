import { useState, useEffect } from 'react';

const jobPositions = [
  "React JS Developer",
  'MERN Stack',
  "Web Developer"
];

const JobPositionsAnimation = () => {
  const [positionIndex, setPositionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (positionIndex < jobPositions.length) {
        const positionText = jobPositions[positionIndex];

        if (charIndex < positionText.length) {
          setDisplayText(positionText.substring(0, charIndex + 1));
          setCharIndex(prevIndex => prevIndex + 1);
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setPositionIndex((prevIndex) => (prevIndex + 1) % jobPositions.length);
            setCharIndex(0);
            setDisplayText("");
          }, 1000); // Delay between positions
        }
      }
    }, 100); // Typing speed (adjusted for clarity)

    return () => clearInterval(typingInterval);
  }, [positionIndex, charIndex]);

  return (
    <div className="typing-container">
      <span>
        <span style={{ marginLeft: '10px', color: 'purple', fontSize: '30px', fontWeight: 'bold' }}>{displayText}</span>
      </span>
    </div>
  );
};

export default JobPositionsAnimation;
