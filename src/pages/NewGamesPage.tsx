import React from 'react';
import GameGrid from '../components/GameGrid';
import CategoryFilter from '../components/CategoryFilter';
import { getNewGames } from '../data/games';
import { Clock } from 'lucide-react';

const NewGamesPage: React.FC = () => {
  const newGames = getNewGames();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <Clock size={24} className="text-orange-500 mr-3" />
          <h1 className="text-3xl font-bold">New Games</h1>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The latest games added to our platform. Fresh and exciting titles for you to enjoy!
        </p>
        
        <CategoryFilter />
        
        <GameGrid 
          games={newGames} 
          title="Recently Added" 
          subtitle="Try these new games" 
        />
      </div>
    </div>
  );
};

export default NewGamesPage;