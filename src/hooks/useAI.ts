import { useState, useCallback } from 'react';
import { ChatMessage, Question } from '../types';

// Simulated AI responses for demo purposes
// In production, this would connect to Groq API or similar service
const AI_RESPONSES = {
  greeting: "Hello! I'm your AI learning companion. I'm here to help you learn more effectively. What would you like to study today?",
  math: "Great choice! Mathematics is fundamental to many fields. Let me help you with that concept. Can you tell me what specific topic you're working on?",
  science: "Science is fascinating! Whether it's physics, chemistry, or biology, I can help explain complex concepts in simple terms. What are you curious about?",
  programming: "Programming is an excellent skill to develop! I can help you understand coding concepts, debug issues, or learn new languages. What are you working on?",
  help: "I'm here to help! You can ask me questions about any subject, request practice quizzes, or get explanations for difficult concepts. What would you like to learn?",
};

export const useAI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: AI_RESPONSES.greeting,
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple keyword-based responses (in production, use proper AI API)
    let aiResponse = "I understand your question. Let me help you with that concept. Could you provide more details about what specifically you'd like to learn?";
    
    const lowerContent = content.toLowerCase();
    if (lowerContent.includes('math') || lowerContent.includes('algebra') || lowerContent.includes('calculus')) {
      aiResponse = AI_RESPONSES.math;
    } else if (lowerContent.includes('science') || lowerContent.includes('physics') || lowerContent.includes('chemistry')) {
      aiResponse = AI_RESPONSES.science;
    } else if (lowerContent.includes('programming') || lowerContent.includes('code') || lowerContent.includes('javascript')) {
      aiResponse = AI_RESPONSES.programming;
    } else if (lowerContent.includes('help') || lowerContent.includes('how')) {
      aiResponse = AI_RESPONSES.help;
    }

    const aiMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      content: aiResponse,
      sender: 'ai',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  }, []);

  const generateQuiz = useCallback(async (subject: string, difficulty: string): Promise<Question[]> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Sample questions based on subject
    const questions: Question[] = [
      {
        id: '1',
        question: `What is the fundamental concept in ${subject}?`,
        options: [
          'Basic principles and foundations',
          'Advanced theoretical framework',
          'Historical development',
          'Practical applications'
        ],
        correctAnswer: 0,
        explanation: `The fundamental concept in ${subject} refers to the basic principles and foundations that form the building blocks of the subject.`,
        difficulty
      },
      {
        id: '2',
        question: `How does ${subject} apply to real-world scenarios?`,
        options: [
          'Through theoretical models only',
          'Via practical implementation and problem-solving',
          'By memorizing formulas',
          'Through historical analysis'
        ],
        correctAnswer: 1,
        explanation: `${subject} applies to real-world scenarios through practical implementation and problem-solving approaches.`,
        difficulty
      }
    ];

    setIsLoading(false);
    return questions;
  }, []);

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: '1',
        content: AI_RESPONSES.greeting,
        sender: 'ai',
        timestamp: new Date(),
      }
    ]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    generateQuiz,
    clearChat
  };
};