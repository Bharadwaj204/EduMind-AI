import React, { useState } from 'react';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { Question } from '../../types';

interface QuizCardProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  questionNumber: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, questionNumber }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    // Delay before moving to next question
    setTimeout(() => {
      onAnswer(answerIndex);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }, 2000);
  };

  const getOptionStyle = (index: number) => {
    if (selectedAnswer === null) {
      return 'bg-gray-50 hover:bg-gray-100 border-gray-200';
    }
    
    if (index === question.correctAnswer) {
      return 'bg-green-100 border-green-500 text-green-800';
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return 'bg-red-100 border-red-500 text-red-800';
    }
    
    return 'bg-gray-50 border-gray-200 text-gray-500';
  };

  const getOptionIcon = (index: number) => {
    if (selectedAnswer === null) return null;
    
    if (index === question.correctAnswer) {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return <XCircle className="w-5 h-5 text-red-600" />;
    }
    
    return null;
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <HelpCircle className="w-5 h-5 text-purple-500" />
          <span className="text-sm font-medium text-purple-600">
            Question {questionNumber}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          {question.question}
        </h3>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(index)}
            disabled={selectedAnswer !== null}
            className={`w-full p-4 text-left border rounded-lg transition-all duration-200 flex items-center justify-between ${getOptionStyle(index)}`}
          >
            <span>{option}</span>
            {getOptionIcon(index)}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Explanation</h4>
          <p className="text-blue-800 text-sm">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizCard;