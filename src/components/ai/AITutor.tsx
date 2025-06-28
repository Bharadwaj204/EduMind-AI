import React, { useState } from 'react';
import { Send, BookOpen, Calculator, FlaskRound as Flask, Code, Lightbulb, Zap } from 'lucide-react';
import { useAI } from '../../hooks/useAI';
import ChatMessage from './ChatMessage';

const AITutor: React.FC = () => {
  const [input, setInput] = useState('');
  const { messages, isLoading, sendMessage, clearChat } = useAI();

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickPrompts = [
    { icon: Calculator, text: "Help me with algebra problems", color: "bg-blue-500" },
    { icon: Flask, text: "Explain chemical reactions", color: "bg-green-500" },
    { icon: Code, text: "Debug my JavaScript code", color: "bg-purple-500" },
    { icon: BookOpen, text: "Summarize this chapter", color: "bg-orange-500" },
  ];

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">AI Learning Companion 🤖</h1>
            <p className="text-purple-100">
              Your personal AI tutor is ready to help you learn anything, anytime!
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <Lightbulb className="w-8 h-8 text-yellow-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white rounded-xl shadow-sm border border-gray-200">
        {/* Quick Prompts */}
        {messages.length <= 1 && (
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Quick Start Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickPrompts.map((prompt, index) => {
                const Icon = prompt.icon;
                return (
                  <button
                    key={index}
                    onClick={() => sendMessage(prompt.text)}
                    className={`flex items-center space-x-3 p-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity ${prompt.color}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{prompt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-500"></div>
              <span className="text-sm">AI is thinking...</span>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your studies..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                rows={1}
                disabled={isLoading}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-gray-500">
              Press Enter to send, Shift+Enter for new line
            </p>
            <button
              onClick={clearChat}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Clear chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutor;