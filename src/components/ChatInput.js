// src/components/ChatInput.js
import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Handle sending message
  };

  const handleAttachment = () => {
    // Handle adding attachment
  };

  const handleAudioToText = () => {
    // Handle audio to text conversion
  };

  const handlePictureUpload = () => {
    // Handle picture upload
  };

  return (
    <div className="chat-input">
      <button onClick={handleAttachment} title="Attachment">&#128206;</button>
      <button onClick={handleAudioToText} title="Audio to Text">&#128247;</button>
      <button onClick={handlePictureUpload} title="Upload Picture">&#128443;</button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;
