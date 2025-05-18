import React from 'react';
import GameGrid from '../components/GameGrid';
import CategoryFilter from '../components/CategoryFilter';
import { getTrendingGames } from '../data/games';
import { TrendingUp } from 'lucide-react';

const TrendingPage: React.FC = () => {
  const trendingGames = getTrendingGames();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <TrendingUp size={24} className="text-teal-500 mr-3" />
          <h1 className="text-3xl font-bold">Trending Games</h1>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Check out the most popular games right now. Updated hourly based on player activity.
        </p>
        
        <CategoryFilter />
        
        <GameGrid 
          games={trendingGames} 
          title="Hot Right Now" 
          subtitle="Games everyone is playing" 
        />
      </div>
    </div>
  );
};

export default TrendingPage;