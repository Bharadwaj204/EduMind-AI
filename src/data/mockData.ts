import { User, Subject, Quiz, Achievement, LearningPath } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  level: 12,
  xp: 2840,
  streak: 7,
  joinDate: '2024-01-15'
};

export const mockSubjects: Subject[] = [
  {
    id: '1',
    name: 'Mathematics',
    icon: 'calculator',
    progress: 75,
    totalLessons: 40,
    completedLessons: 30,
    difficulty: 'intermediate',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    name: 'Science',
    icon: 'flask',
    progress: 60,
    totalLessons: 35,
    completedLessons: 21,
    difficulty: 'beginner',
    color: 'bg-green-500'
  },
  {
    id: '3',
    name: 'Programming',
    icon: 'code',
    progress: 45,
    totalLessons: 50,
    completedLessons: 22,
    difficulty: 'intermediate',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    name: 'Literature',
    icon: 'book',
    progress: 80,
    totalLessons: 25,
    completedLessons: 20,
    difficulty: 'advanced',
    color: 'bg-pink-500'
  },
  {
    id: '5',
    name: 'History',
    icon: 'clock',
    progress: 35,
    totalLessons: 30,
    completedLessons: 10,
    difficulty: 'beginner',
    color: 'bg-orange-500'
  },
  {
    id: '6',
    name: 'Art',
    icon: 'palette',
    progress: 55,
    totalLessons: 20,
    completedLessons: 11,
    difficulty: 'intermediate',
    color: 'bg-indigo-500'
  }
];

export const mockQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Algebra Fundamentals',
    subject: 'Mathematics',
    difficulty: 'intermediate',
    questions: [],
    timeLimit: 30,
    completed: true,
    score: 85
  },
  {
    id: '2',
    title: 'Chemical Reactions',
    subject: 'Science',
    difficulty: 'beginner',
    questions: [],
    timeLimit: 25,
    completed: false
  },
  {
    id: '3',
    title: 'JavaScript Basics',
    subject: 'Programming',
    difficulty: 'intermediate',
    questions: [],
    timeLimit: 40,
    completed: true,
    score: 92
  }
];

export const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: 'star',
    unlocked: true,
    unlockedAt: new Date('2024-01-16')
  },
  {
    id: '2',
    title: 'Quiz Master',
    description: 'Score 90% or higher on 5 quizzes',
    icon: 'trophy',
    unlocked: true,
    unlockedAt: new Date('2024-01-20')
  },
  {
    id: '3',
    title: 'Week Warrior',
    description: 'Maintain a 7-day learning streak',
    icon: 'flame',
    unlocked: true,
    unlockedAt: new Date('2024-01-22')
  },
  {
    id: '4',
    title: 'Subject Explorer',
    description: 'Complete lessons in 3 different subjects',
    icon: 'compass',
    unlocked: false
  },
  {
    id: '5',
    title: 'Perfect Score',
    description: 'Get 100% on any quiz',
    icon: 'target',
    unlocked: false
  }
];

export const mockLearningPaths: LearningPath[] = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of HTML, CSS, and JavaScript',
    subjects: ['Programming', 'Design'],
    estimatedTime: '6 weeks',
    difficulty: 'beginner',
    progress: 65,
    lessons: [
      {
        id: '1',
        title: 'Introduction to HTML',
        description: 'Learn the structure of web pages',
        content: 'HTML content here...',
        duration: 45,
        completed: true,
        type: 'interactive'
      },
      {
        id: '2',
        title: 'CSS Styling',
        description: 'Make your web pages beautiful',
        content: 'CSS content here...',
        duration: 60,
        completed: true,
        type: 'video'
      }
    ]
  },
  {
    id: '2',
    title: 'Advanced Mathematics',
    description: 'Dive deep into calculus and advanced algebra',
    subjects: ['Mathematics'],
    estimatedTime: '8 weeks',
    difficulty: 'advanced',
    progress: 30,
    lessons: []
  }
];