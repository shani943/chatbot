// src/components/NewChat.js
import React from 'react';
import ChatInput from './ChatInput';
import './NewChat.css';

const NewChat = () => {
  return (
    <div className="new-chat">
      <div className="chat-window">
        {/* Chat messages will appear here */}
        <p>Chat messages go here...</p>
      </div>
      <ChatInput />
    </div>
  );
};

export default NewChat;
