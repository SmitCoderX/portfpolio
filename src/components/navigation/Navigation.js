import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  const [animateNav, setAnimateNav] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const navigationItem = [
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Home', path: '/' },
  ];

  useEffect(() => {
    // Trigger animation on page load
    const timeout = setTimeout(() => {
      setAnimateNav(true);
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  return (
    <div>
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={toggleNav}
      >
        ☰
      </button>
      <nav
        className={`${animateNav ? 'animated' : ''} ${
          isNavVisible ? 'active' : ''
        }`}
      >
        <ul>
          {navigationItem.map((item) => (
            <li key={item.name}>
              <Link
                className={'rubik-text'}
                to={item.path}
                onClick={() => setIsNavVisible(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
