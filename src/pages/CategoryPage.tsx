import React from 'react';
import { useParams } from 'react-router-dom';
import GameGrid from '../components/GameGrid';
import CategoryFilter from '../components/CategoryFilter';
import { getGamesByCategory, categories } from '../data/games';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const games = category ? getGamesByCategory(category) : [];
  
  // Find the category name from the slug
  const categoryName = categories.find(cat => cat.slug === category)?.name || category;
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-6">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{categoryName} Games</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our collection of the best {categoryName.toLowerCase()} games. 
            Play instantly in your browser!
          </p>
        </div>
        
        <CategoryFilter />
        
        <GameGrid 
          games={games} 
          title={`${categoryName} Games (${games.length})`} 
          subtitle={`Browse all ${categoryName.toLowerCase()} games`} 
        />
      </div>
    </div>
  );
};

export default CategoryPage;