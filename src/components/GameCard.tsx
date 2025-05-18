import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';
import { Star, TrendingUp } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`}>
      <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
        {/* Image container with fixed aspect ratio */}
        <div className="relative pt-[56.25%]">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {game.isNew && (
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                NEW
              </span>
            )}
            {game.isTrending && (
              <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                <TrendingUp size={12} className="mr-1" /> TRENDING
              </span>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1 line-clamp-1">
            {game.title}
          </h3>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center text-amber-500 mr-3">
              <Star size={16} className="fill-current" />
              <span className="ml-1 text-sm font-medium">{game.rating.toFixed(1)}</span>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {new Intl.NumberFormat().format(game.plays)} plays
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3 flex-grow">
            {game.description}
          </p>
          
          <div className="flex flex-wrap gap-1 mt-auto">
            {game.category.slice(0, 2).map((cat, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 rounded-full"
              >
                {cat}
              </span>
            ))}
            {game.category.length > 2 && (
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full">
                +{game.category.length - 2}
              </span>
            )}
          </div>
        </div>
        
        {/* Play overlay button */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-bold transition-colors">
            PLAY NOW
          </button>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;