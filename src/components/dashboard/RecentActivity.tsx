import React from 'react';
import { Clock, CheckCircle, Trophy, Brain } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'lesson',
      title: 'Completed "Advanced JavaScript"',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      id: 2,
      type: 'quiz',
      title: 'Scored 95% on Math Quiz',
      time: '4 hours ago',
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      id: 3,
      type: 'ai',
      title: 'AI Tutor session on Physics',
      time: '6 hours ago',
      icon: Brain,
      color: 'text-purple-500'
    },
    {
      id: 4,
      type: 'lesson',
      title: 'Started "Chemical Bonding"',
      time: '1 day ago',
      icon: Clock,
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-center space-x-3">
              <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {activity.title}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;