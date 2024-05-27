// src/components/ChatBot.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import ChatHistory from './ChatHistory';
import NewChat from './NewChat';
import './ChatBot.css';

const ChatBot = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="chatbot-container">
      <ChatHistory isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <header className="header">
          <Navbar />
        </header>
        <div className="chat-area">
          <NewChat />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
