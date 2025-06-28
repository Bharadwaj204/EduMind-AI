import React from 'react';
import { Trophy, Star, Flame, Target, Compass, Lock } from 'lucide-react';
import { Achievement } from '../../types';

interface AchievementsListProps {
  achievements: Achievement[];
}

const AchievementsList: React.FC<AchievementsListProps> = ({ achievements }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'star':
        return Star;
      case 'trophy':
        return Trophy;
      case 'flame':
        return Flame;
      case 'target':
        return Target;
      case 'compass':
        return Compass;
      default:
        return Trophy;
    }
  };

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const lockedAchievements = achievements.filter(a => !a.unlocked);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Your Achievements 🏆</h1>
            <p className="text-yellow-100">
              Celebrate your learning milestones and unlock new badges
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <Trophy className="w-8 h-8 text-yellow-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Achievements</p>
              <p className="text-2xl font-bold text-gray-900">{achievements.length}</p>
            </div>
            <Trophy className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unlocked</p>
              <p className="text-2xl font-bold text-green-600">{unlockedAchievements.length}</p>
            </div>
            <Star className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completion Rate</p>
              <p className="text-2xl font-bold text-blue-600">
                {Math.round((unlockedAchievements.length / achievements.length) * 100)}%
              </p>
            </div>
            <Target className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Unlocked Achievements */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Unlocked Achievements ({unlockedAchievements.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {unlockedAchievements.map((achievement) => {
            const Icon = getIcon(achievement.icon);
            return (
              <div key={achievement.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <span className="text-xs text-green-600 font-medium px-2 py-1 bg-green-100 rounded-full">
                    UNLOCKED
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                {achievement.unlockedAt && (
                  <p className="text-xs text-gray-500">
                    Unlocked on {achievement.unlockedAt.toLocaleDateString()}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Locked Achievements */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Locked Achievements ({lockedAchievements.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lockedAchievements.map((achievement) => {
            const Icon = getIcon(achievement.icon);
            return (
              <div key={achievement.id} className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200 opacity-75">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-200 rounded-lg">
                    <Lock className="w-6 h-6 text-gray-500" />
                  </div>
                  <span className="text-xs text-gray-500 font-medium px-2 py-1 bg-gray-200 rounded-full">
                    LOCKED
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-600 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-500">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsList;