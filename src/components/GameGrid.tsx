import React from 'react';
import GameCard from './GameCard';
import { Game } from '../types';

interface GameGridProps {
  games: Game[];
  title?: string;
  subtitle?: string;
}

const GameGrid: React.FC<GameGridProps> = ({ games, title, subtitle }) => {
  return (
    <section className="py-4 sm:py-6">
      {(title || subtitle) && (
        <div className="mb-4 sm:mb-6 px-4 sm:px-0">
          {title && <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>}
          {subtitle && <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">{subtitle}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-0">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      
      {games.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">No games found.</p>
        </div>
      )}
    </section>
  );
};

export default GameGrid;