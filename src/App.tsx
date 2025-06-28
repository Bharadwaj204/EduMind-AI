import React, { useState } from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import SubjectsList from './components/subjects/SubjectsList';
import AITutor from './components/ai/AITutor';
import QuizGenerator from './components/quiz/QuizGenerator';
import AchievementsList from './components/achievements/AchievementsList';
import Analytics from './components/analytics/Analytics';
import { mockUser, mockSubjects, mockAchievements } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard user={mockUser} subjects={mockSubjects} />;
      case 'subjects':
        return <SubjectsList subjects={mockSubjects} />;
      case 'ai-tutor':
        return <AITutor />;
      case 'quizzes':
        return <QuizGenerator />;
      case 'achievements':
        return <AchievementsList achievements={mockAchievements} />;
      case 'analytics':
        return <Analytics />;
      case 'chat':
        return <AITutor />;
      default:
        return <Dashboard user={mockUser} subjects={mockSubjects} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={mockUser} />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;