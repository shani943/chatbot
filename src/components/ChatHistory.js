// src/components/ChatHistory.js
import React from 'react';
import './ChatHistory.css';

const ChatHistory = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`chat-history ${isSidebarOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <h2 className={`chat-history-title ${isSidebarOpen ? 'open' : ''}`}>Chat History</h2>
      <ul className={`chat-history-list ${isSidebarOpen ? 'open' : ''}`}>
        <li>Chat with User A</li>
        <li>Chat with User B</li>
        <li>Chat with User C</li>
        <li>Chat with User D</li>
      </ul>
    </div>
  );
};

export default ChatHistory;
