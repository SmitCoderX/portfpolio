import React, { useState, useEffect } from 'react';
// import styles from '../styles/navigation.css';
import './navigation.css';

function Navigation() {
  const [animateNav, setAnimateNav] = useState(false);

  const navigationItem = [
    'Education',
    'Projects',
    'Skills',
    'Experience',
    'About',
  ];

  useEffect(() => {
    // Trigger animation on page load
    setAnimateNav(true);
  }, []);

  return (
    <nav className={animateNav ? 'nav animated' : 'nav'}>
      <ul>
        {navigationItem.map((itemName) => (
          <div>
            <li>
              <a href="#">{itemName}</a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
