// src/components/DropdownMenu.js
import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({ handleLogin, handleSignup }) => {
  return (
    <div className="dropdown-menu">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default DropdownMenu;
