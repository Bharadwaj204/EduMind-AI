export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  level: number;
  xp: number;
  streak: number;
  joinDate: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  color: string;
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  difficulty: string;
  questions: Question[];
  timeLimit: number;
  completed: boolean;
  score?: number;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'code' | 'formula';
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  subjects: string[];
  estimatedTime: string;
  difficulty: string;
  progress: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  duration: number;
  completed: boolean;
  type: 'video' | 'text' | 'interactive';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}