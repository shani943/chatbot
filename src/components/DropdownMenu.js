// DropdownMenu.js
import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = () => {
  const handleLogin = () => {
    // Handle login logic
    console.log('Logging in...');
  };

  const handleSignup = () => {
    // Handle signup logic
    console.log('Signing up...');
  };

  return (
    <div className="dropdown-menu">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default DropdownMenu;
