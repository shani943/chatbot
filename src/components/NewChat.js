import React, { useRef, useEffect } from 'react';
import ChatInput from './ChatInput';
import './NewChat.css';

const NewChat = ({ addMessage, messages }) => {
  const chatDisplayRef = useRef(null);

  useEffect(() => {
    if (chatDisplayRef.current) {
      chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (message) => {
    addMessage(message);
  };

  return (
    <div className="new-chat">
      <div className="chat-display" ref={chatDisplayRef}>
        {messages.map((message) => (
          <div key={message.id} className="message">
            {message.text}
          </div>
        ))}
      </div>
      <ChatInput addMessage={handleSendMessage} />
    </div>
  );
};

export default NewChat;
