// src/components/Profile.js
import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import './Profile.css';

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    // Handle login action
    console.log("Logging in...");
  };

  const handleSignup = () => {
    // Handle signup action
    console.log("Signing up...");
  };

  return (
    <div className="profile">
      <div className="profile-icon" onClick={toggleDropdown}>
        👤
      </div>
      {isDropdownOpen && (
        <DropdownMenu handleLogin={handleLogin} handleSignup={handleSignup} />
      )}
    </div>
  );
};

export default Profile;
