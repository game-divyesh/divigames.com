import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getGameById, getGamesByCategory } from '../data/games';
import GamePlayer from '../components/GamePlayer';
import GameGrid from '../components/GameGrid';
import { Star, Users, CalendarIcon, Tag } from 'lucide-react';

const GameDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const game = getGameById(id || '');
  
  if (!game) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Game not found</h1>
        <p className="mb-8">The game you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }
  
  // Get similar games based on the first category
  const similarGames = game.category[0] 
    ? getGamesByCategory(game.category[0]).filter(g => g.id !== game.id).slice(0, 5)
    : [];
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-6">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
          {' > '}
          {game.category[0] && (
            <>
              <Link 
                to={`/category/${game.category[0].toLowerCase()}`} 
                className="hover:text-teal-500 transition-colors"
              >
                {game.category[0]}
              </Link>
              {' > '}
            </>
          )}
          <span className="text-gray-900 dark:text-white">{game.title}</span>
        </div>
        
        {/* Game title and info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Star size={16} className="text-amber-500 mr-1" />
                <span>{game.rating.toFixed(1)} Rating</span>
              </div>
              <div className="flex items-center">
                <Users size={16} className="mr-1" />
                <span>{new Intl.NumberFormat().format(game.plays)} Plays</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon size={16} className="mr-1" />
                <span>Added {game.isNew ? 'Recently' : '3 months ago'}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {game.category.map((cat, index) => (
              <Link
                key={index}
                to={`/category/${cat.toLowerCase()}`}
                className="flex items-center px-3 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 rounded-full text-sm"
              >
                <Tag size={14} className="mr-1" />
                {cat}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Game player */}
        <GamePlayer game={game} />
        
        {/* Game description */}
        <div className="my-8">
          <h2 className="text-xl font-bold mb-4">About {game.title}</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {game.description}
            {/* Extended description for demo purposes */}
            <br /><br />
            Dive into an immersive gaming experience with {game.title}! This game features stunning 
            graphics, engaging gameplay, and challenging levels designed to keep you entertained 
            for hours. Whether you're a casual player or hardcore gamer, you'll find something to 
            enjoy in this exciting title.
            <br /><br />
            The game includes multiple modes, power-ups, and achievements to unlock. Challenge 
            yourself or compete with friends to see who can get the highest score. With regular 
            updates and new content, the fun never stops!
          </p>
        </div>
        
        {/* Controls section */}
        <div className="my-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h2 className="text-xl font-bold mb-4">How to Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Keyboard Controls</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>WASD or Arrow Keys: Move character</li>
                <li>Space: Jump</li>
                <li>E: Interact with objects</li>
                <li>R: Reload</li>
                <li>1-9: Select items</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mouse Controls</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Left Click: Primary action</li>
                <li>Right Click: Secondary action</li>
                <li>Mouse Movement: Look around</li>
                <li>Scroll Wheel: Zoom in/out or change items</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Similar games */}
        {similarGames.length > 0 && (
          <div className="my-12">
            <GameGrid 
              games={similarGames} 
              title={`Similar to ${game.title}`} 
              subtitle="You might also like these games" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GameDetailsPage;