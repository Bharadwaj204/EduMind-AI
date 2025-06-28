import React from 'react';
import { BookOpen, Calendar, Trophy } from 'lucide-react';
import { Subject } from '../../types';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'calculator':
        return '📊';
      case 'flask':
        return '🧪';
      case 'code':
        return '💻';
      case 'book':
        return '📚';
      case 'clock':
        return '🕐';
      case 'palette':
        return '🎨';
      default:
        return '📖';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{getIcon(subject.icon)}</span>
          <div>
            <h3 className="font-semibold text-gray-900">{subject.name}</h3>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(subject.difficulty)}`}>
              {subject.difficulty}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">{subject.progress}%</div>
          <div className="text-xs text-gray-500">
            {subject.completedLessons}/{subject.totalLessons} lessons
          </div>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>Progress</span>
          <span>{subject.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${subject.color}`}
            style={{ width: `${subject.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <BookOpen className="w-3 h-3" />
          <span>{subject.totalLessons} lessons</span>
        </div>
        <button className="text-purple-600 hover:text-purple-700 font-medium">
          Continue
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;