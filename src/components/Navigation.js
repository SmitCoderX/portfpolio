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
    const timeout = setTimeout(() => {
      setAnimateNav(true);
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  return (
    <nav className={animateNav ? 'nav animated' : 'nav'}>
      <ul>
        {navigationItem.map((itemName) => (
          <div>
            <li>
              <a className={'rubik-text'} href="#">
                {itemName}
              </a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
