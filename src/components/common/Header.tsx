import React from 'react';
import { User, Bell, Settings, LogOut } from 'lucide-react';
import { User as UserType } from '../../types';

interface HeaderProps {
  user: UserType;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  user, 
  onProfileClick, 
  onSettingsClick, 
  onLogoutClick 
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">EduMind AI</span>
            </div>
          </div>

          {/* User Info & Actions */}
          <div className="flex items-center space-x-4">
            {/* XP and Level */}
            <div className="hidden sm:flex items-center space-x-4">
              <div className="text-sm">
                <span className="text-gray-500">Level</span>
                <span className="ml-1 font-semibold text-purple-600">{user.level}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">XP</span>
                <span className="ml-1 font-semibold text-blue-600">{user.xp.toLocaleString()}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Streak</span>
                <span className="ml-1 font-semibold text-orange-600">{user.streak} days</span>
              </div>
            </div>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
            </button>

            {/* Settings */}
            <button 
              onClick={onSettingsClick}
              className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* Profile */}
            <div className="relative">
              <button 
                onClick={onProfileClick}
                className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="hidden sm:block text-sm font-medium">{user.name}</span>
              </button>
            </div>

            {/* Logout */}
            <button 
              onClick={onLogoutClick}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;