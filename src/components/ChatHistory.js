import React, { useRef, useEffect } from 'react';
import './ChatHistory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ChatHistory = ({ isSidebarOpen, toggleSidebar, conversations, onConversationClick, onDeleteConversation, currentConversationIndex }) => {
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversations, currentConversationIndex]);

  const getTruncatedTitle = (title) => {
    if (title.length <= 10) {
      return title;
    }
    return title.substring(0, 10) + '...';
  };

  return (
    <div className={`chat-history ${isSidebarOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <h2 className={`chat-history-title ${isSidebarOpen ? 'open' : ''}`}>Chat History</h2>
      <ul className={`chat-history-list ${isSidebarOpen ? 'open' : ''}`}>
        {conversations.map((conversation, index) => (
          <li key={conversation.id}>
            <span onClick={() => onConversationClick(index)} className={index === currentConversationIndex ? 'selected' : ''}>
              {getTruncatedTitle(conversation.title)}
            </span>
            <button className="delete-button" onClick={() => onDeleteConversation(conversation.id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </li>
        ))}
      </ul>
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatHistory;
