import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import ChatHistory from './ChatHistory';
import NewChat from './NewChat';
import './ChatBot.css';

const ChatBot = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addMessage = (message) => {
    const newMessage = {
      id: `msg-${Date.now()}`,
      text: message,
    };

    const updatedConversations = [...conversations];
    const currentConversation = updatedConversations[currentConversationIndex];

    if (currentConversation.messages.length === 0) {
      currentConversation.title = message;
    }

    currentConversation.messages.push(newMessage);
    setConversations([currentConversation, ...updatedConversations.slice(0, currentConversationIndex), ...updatedConversations.slice(currentConversationIndex + 1)]);

    console.log(JSON.stringify({ conversations: updatedConversations }));
  };

  const createNewChat = useCallback(() => {
    const currentConversation = conversations[currentConversationIndex];
    if (currentConversation && currentConversation.messages.length === 0) {
      return;
    }
    const newConversation = {
      id: `conv-${Date.now()}`,
      title: '',
      messages: [],
    };
    setConversations([newConversation, ...conversations]);
    setCurrentConversationIndex(0);
  }, [conversations, currentConversationIndex]);

  useEffect(() => {
    if (conversations.length === 0) {
      createNewChat();
    }
  }, [conversations.length, createNewChat]);

  const handleConversationClick = (index) => {
    setCurrentConversationIndex(index);
  };

  const handleDeleteConversation = (id) => {
    const updatedConversations = conversations.filter(conversation => conversation.id !== id);
    setConversations(updatedConversations);
    setCurrentConversationIndex(0);
  };

  return (
    <div className="chatbot-container">
      <ChatHistory
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        conversations={conversations}
        onConversationClick={handleConversationClick}
        onDeleteConversation={handleDeleteConversation}
        currentConversationIndex={currentConversationIndex}
      />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <header className="header">
          <Navbar createNewChat={createNewChat} />
        </header>
        <div className="chat-area">
          <div className="chat-content" />
          <NewChat
            addMessage={addMessage}
            messages={conversations[currentConversationIndex]?.messages || []}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
