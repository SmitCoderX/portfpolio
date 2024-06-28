import React, { useState, useEffect } from 'react';
import './card.css';

function Card() {
  const [backgroundColor, setBackgroundColor] = useState(getRandomLightColor());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundColor(getRandomLightColor());
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  // Function to generate a random light color
  function getRandomLightColor() {
    const letters = 'BCDEF'; // Only use letters B to F for light colors
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  return (
    <div className="card" style={{ backgroundColor }}>
      <h1>I'm Anirudh Sharma</h1>
      <p>anirudh16june@gmail.com</p>
    </div>
  );
}

export default Card;
