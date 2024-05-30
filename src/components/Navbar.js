// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import Profile from './Profile';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>About Us</li>
        <li>Create New Chat</li>
        <li><Profile /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
