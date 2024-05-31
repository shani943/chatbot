// src/components/NewChat.js
import React from 'react';
import ChatInput from './ChatInput';
import './NewChat.css';

const NewChat = ({ addMessage, messages }) => {
  return (
    <div className="new-chat">
      <div className="chat-window">
        {messages.map(message => (
          <p key={message.id}>{message.text}</p>
        ))}
      </div>
      <ChatInput addMessage={addMessage} />
    </div>
  );
};

export default NewChat;
