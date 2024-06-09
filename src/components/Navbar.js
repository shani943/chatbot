// Navbar.js
import React, { useState } from 'react';
import Profile from './Profile';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ createNewChat }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <ul className="navbar-menu">
        <li><button onClick={createNewChat}>Create New Chat</button></li>
        <li><Profile /></li>
        <li>
          <div className="dark-mode-toggle" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
