'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaCommentDots, FaUser } from 'react-icons/fa';
import ClientOnly from './ClientOnly';

// Sample questions
const sampleQuestions = [
  "How do I sell my license?",
  "What types of software do you support?",
  "How long does the process take?",
  "How much is my license worth?",
  "Is my data secure?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! I\'m SoftSell\'s virtual assistant. How can I help you with software license resales today?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);
  
  const handleSendMessage = async (text = inputValue) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: text,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    try {
      // Call our API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }
      
      const data = await response.json();
      
      // Add bot response
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: data.response,
        model: data.model,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting chat response:', error);
      
      // Add error message
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: "I'm sorry, I encountered an error. Please try again later or contact our support team.",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };
  
  const handleSampleQuestionClick = (question) => {
    setInputValue(question);
    handleSendMessage(question);
  };
  
  return (
    <>
      {/* Chat Widget Button */}
      <ClientOnly>
        <motion.button
          className="fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center text-white z-30"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes size={20} /> : <FaCommentDots size={20} />}
        </motion.button>
      </ClientOnly>
      
      {/* Chat Window */}      <ClientOnly>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-24 right-6 w-80 sm:w-96 h-[28rem] max-h-[80vh] flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-2xl z-30 border border-gray-200 dark:border-gray-700"
            >
              {/* Chat Header */}
              <div className="bg-primary text-white p-4 flex items-center flex-shrink-0">
                <FaRobot className="text-xl mr-2" />
                <div>
                  <h3 className="font-medium">SoftSell Assistant</h3>
                  <p className="text-xs text-white/80">Online | Typically replies instantly</p>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === 'user'
                          ? 'bg-primary text-white rounded-tr-none'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
                      }`}
                    >
                      {message.text}
                      <div
                        className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-gray-800 dark:text-gray-200 w-16">
                      <span className="typing-animation">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </span>
                    </div>
                  </div>
                )}                <div ref={messagesEndRef} />
              </div>
              
              {/* Sample Questions */}
              {messages.length < 3 && (
                <div className="flex-shrink-0 px-4 py-2 bg-gray-50 dark:bg-gray-900/50">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    You can ask me:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sampleQuestions.slice(0, 3).map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSampleQuestionClick(q)}
                        className="text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full px-3 py-1 text-gray-700 dark:text-gray-300 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Chat Input */}
              <div className="flex-shrink-0 p-3 border-t border-gray-200 dark:border-gray-700">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 py-2 px-3 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className={`rounded-full p-2 ${
                      inputValue.trim()
                        ? 'bg-primary text-white'
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ClientOnly>

      {/* CSS for typing animation */}
      <style jsx>{`
        .typing-animation {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: currentColor;
          animation: typing 1.5s infinite ease-in-out;
        }
        
        .dot:nth-child(1) {
          animation-delay: 0s;
        }
        
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes typing {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}