import React, { useState, useEffect } from 'react';
import Card from './Card';
import './home.css';
import { Link } from 'react-router-dom';
import 'react-social-icons/github';
import 'react-social-icons/linkedin';
import 'react-social-icons/x';
import 'react-social-icons/instagram';
import 'react-social-icons/facebook';
import 'react-social-icons/discord';
import { SocialIcon } from 'react-social-icons';

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
    }, 8000); // Duration to show each text

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="content-container">
      <Card />
      <div className="side-content">
        <h1 className={`animated-text ${animate ? 'move-in' : 'move-out'}`}>
          {currentText}
        </h1>
        <div className="row-details">
          <div className="about-me-card">
            <div className="about-me">
              <h2>About Me</h2>
              <p>
                A passionate Android Developer who thrives on creating
                end-to-end products. Specializing in modern mobile applications
                using Kotlin and Java, he focuses on developing sustainable and
                scalable systems. His expertise in app architecture allows him
                to build efficient, user-friendly solutions that create
                meaningful technical and social impact.
              </p>
            </div>
          </div>
          <div className="vertical-content">
            <h3 className="yoe">
              <div className="e-background"></div>
              <span className="year">3</span>
              <span className="yoe-title">years</span>
              <span className="yoe-title-two">experience</span>
            </h3>
            <h3 className="projects">
              <div className="p-background"></div>
              <span className="project-num">12+</span>
              <span className="project-title">Projects</span>
            </h3>
          </div>
        </div>
        <div className="second-row">
          <div className="card-resume">
            <Link
              className="resume-link"
              target="_blank"
              rel="noopener noreferrer"
              to="https://drive.google.com/file/d/105hiZ509Zq8avlUZ6xm9KgOQWCwjJKVj/view?usp=drive_link"
            >
              <h2>
                <span className="resume-download">Download</span>
                <span className="resume">Resume</span>
              </h2>
            </Link>
          </div>

          <div className="social">
            <h3 className="social-heading">Social Links</h3>
            <div className="social-platform">
              <SocialIcon
                className="social-icon"
                url="https://github.com/SmitCoderX"
                target="_blank"
              />
              <SocialIcon
                className="social-icon"
                url="https://linkedin.com/in/SmitCoderX"
                target="_blank"
              />
              <SocialIcon
                className="social-icon"
                url="https://x.com/anirudh16june"
                target="_blank"
              />
              <SocialIcon
                className="social-icon"
                url="https://instagram.com/anirudh_16_sharma"
                target="_blank"
              />
              <SocialIcon
                className="social-icon"
                url="https://facebook.com/anirudh.sharma.3538039"
                target="_blank"
              />
              <SocialIcon
                className="social-icon"
                network="discord"
                url="https://discordapp.com/users/655776418722217994/"
                target="_blank"
              />
            </div>
          </div>
        </div>

        <div className="made-card">
          <h3>
            Made with ❤️ by{' '}
            <Link
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/SmitCoderX/portfpolio/"
            >
              SmitCoderX
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
