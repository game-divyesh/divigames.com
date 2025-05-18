import React from 'react';
import HeroSection from '../components/HeroSection';
import GameGrid from '../components/GameGrid';
import CategoryFilter from '../components/CategoryFilter';
import { games, getTrendingGames, getNewGames } from '../data/games';

const HomePage: React.FC = () => {
  const trendingGames = getTrendingGames();
  const newGames = getNewGames();
  
  // Get 5 random games for featured section
  const featuredGames = [...games].sort(() => 0.5 - Math.random()).slice(0, 5);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <HeroSection />
      
      <div className="container mx-auto px-4">
        {/* Category filter */}
        <div className="my-6">
          <CategoryFilter />
        </div>
        
        {/* Trending games section */}
        <GameGrid 
          games={trendingGames} 
          title="Trending Games" 
          subtitle="Most popular games right now" 
        />
        
        {/* Featured games section */}
        {/* <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="md:col-span-2 lg:col-span-2 row-span-1">
              {featuredGames[0] && (
                <div className="relative rounded-lg overflow-hidden h-80 group">
                  <img 
                    src={featuredGames[0].thumbnail} 
                    alt={featuredGames[0].title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{featuredGames[0].title}</h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">{featuredGames[0].description}</p>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-full w-max transition-colors">
                      PLAY NOW
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {featuredGames.slice(1, 3).map((game) => (
              <div key={game.id} className="rounded-lg overflow-hidden h-80 group relative">
                <img 
                  src={game.thumbnail} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">{game.description}</p>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-max transition-colors">
                    PLAY NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        
        {/* New games section */}
        {/* <GameGrid 
          games={newGames} 
          title="New Games" 
          subtitle="Fresh and exciting games just added" 
        /> */}
        
        {/* All games section */}
        {/* <GameGrid 
          games={games} 
          title="All Games" 
          subtitle="Browse our complete collection" 
        /> */}
      </div>
    </div>
  );
};

export default HomePage;