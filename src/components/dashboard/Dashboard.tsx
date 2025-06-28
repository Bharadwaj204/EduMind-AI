import React from 'react';
import { TrendingUp, Clock, Target, BookOpen, Trophy, Flame } from 'lucide-react';
import { User, Subject } from '../../types';
import StatsCard from './StatsCard';
import SubjectCard from './SubjectCard';
import RecentActivity from './RecentActivity';

interface DashboardProps {
  user: User;
  subjects: Subject[];
}

const Dashboard: React.FC<DashboardProps> = ({ user, subjects }) => {
  const totalProgress = subjects.reduce((acc, subject) => acc + subject.progress, 0) / subjects.length;
  const completedLessons = subjects.reduce((acc, subject) => acc + subject.completedLessons, 0);
  const totalLessons = subjects.reduce((acc, subject) => acc + subject.totalLessons, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 🎯</h1>
            <p className="text-purple-100 text-lg">
              Ready to continue your learning journey? You're on a {user.streak}-day streak!
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{user.level}</div>
              <div className="text-sm text-purple-100">Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{user.xp.toLocaleString()}</div>
              <div className="text-sm text-purple-100">XP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Overall Progress"
          value={`${Math.round(totalProgress)}%`}
          icon={TrendingUp}
          color="bg-blue-500"
          change="+12%"
        />
        <StatsCard
          title="Study Streak"
          value={`${user.streak} days`}
          icon={Flame}
          color="bg-orange-500"
          change="+1 day"
        />
        <StatsCard
          title="Lessons Completed"
          value={`${completedLessons}/${totalLessons}`}
          icon={BookOpen}
          color="bg-green-500"
          change="+3 today"
        />
        <StatsCard
          title="Quiz Average"
          value="89%"
          icon={Target}
          color="bg-purple-500"
          change="+5%"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subjects Progress */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Your Subjects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-6">
          <RecentActivity />
          
          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all">
                Start AI Tutoring Session
              </button>
              <button className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-teal-600 transition-all">
                Generate Practice Quiz
              </button>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all">
                Review Weak Areas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;