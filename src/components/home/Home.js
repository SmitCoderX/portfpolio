import React, { useState, useEffect } from 'react';
import Card from './Card';
import './home.css';

function Home() {
  const texts = ['SmitCoderX', 'Android Developer', 'Portfolio'];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setAnimate(false); // Trigger move-out animation
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        setCurrentText(texts[currentIndex]);
        setAnimate(true); // Trigger move-in animation
      }, 800); // Duration of move-out animation
    }, 4000); // Duration to show each text

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="content-container">
      <Card />
      <h1 className={`animated-text ${animate ? 'move-in' : 'move-out'}`}>
        {currentText}
      </h1>
    </div>
  );
}

export default Home;
