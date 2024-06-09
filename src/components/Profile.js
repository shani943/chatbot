// Profile.js
import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import './Profile.css';

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="profile">
      <div className="profile-icon" onClick={toggleDropdown}>
        👤
      </div>
      {isDropdownOpen && (
        <DropdownMenu />
      )}
    </div>
  );
};

export default Profile;
