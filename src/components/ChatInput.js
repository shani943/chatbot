import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPaperPlane, faMicrophone, faImage } from '@fortawesome/free-solid-svg-icons';
import './ChatInput.css';

const ChatInput = ({ addMessage }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      addMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      // Prevent default behavior and allow Shift + Enter to add a new line
      e.preventDefault();
      setMessage((prev) => prev + '\n');
    }
  };

  const handleAudioToText = () => {
    setIsRecording(!isRecording);
    console.log(isRecording ? "Stopped recording" : "Started recording");
  };

  const handleAttachment = () => {
    // Handle adding attachment
  };

  const handlePictureUpload = () => {
    // Handle picture upload
  };

  return (
    <div className="chat-input">
      <button onClick={handleAttachment} title="Attachment">
        <FontAwesomeIcon icon={faPaperclip} />
      </button>
      <button onClick={handlePictureUpload} title="Upload Picture">
        <FontAwesomeIcon icon={faImage} />
      </button>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyDown}
        rows="1"
      />
      <button onClick={handleSend} title="Send" className="send-button">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
      <button onClick={handleAudioToText} title="Audio to Text" className="mic-button">
        <FontAwesomeIcon icon={faMicrophone} />
      </button>
    </div>
  );
};

export default ChatInput;
