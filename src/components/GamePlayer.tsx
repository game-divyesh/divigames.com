import React, { useState } from 'react';
import { Game } from '../types';
import { Maximize2, Heart, Share2, Flag } from 'lucide-react';

interface GamePlayerProps {
  game: Game;
}

const GamePlayer: React.FC<GamePlayerProps> = ({ game }) => {
  const [runGame,setRunGame]=useState(false);

  const handleRunGame=()=>{
      setRunGame(!runGame);
  }

  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
      {/* Game player header */}
      <div className="bg-violet-900 p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold truncate">{game.title}</h2>
        <div className="flex items-center space-x-3">
          <button className="text-white hover:text-teal-400 transition-colors">
            <Heart size={20} />
          </button>
          <button className="text-white hover:text-teal-400 transition-colors">
            <Share2 size={20} />
          </button>
          <button className="text-white hover:text-teal-400 transition-colors">
            <Maximize2 size={20} />
          </button>
        </div>
      </div>
      
      {/* Game iframe container */}
      <div className="relative pt-[56.25%] bg-black">
        {/* This would be replaced with actual game iframe in a real implementation */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-900/20 to-teal-900/20">
            {
              runGame ?  <iframe className='w-full h-full object-contain' src={game.url} /> :
          <div className="text-center">
              <img 
                src={game.thumbnail} 
                alt={game.title} 
                className="w-full h-full object-contain opacity-50"
              />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xl mb-4">Game Preview</p>
              <button onClick={handleRunGame} className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors">
                PLAY NOW
              </button>
            </div>
          </div>
            }
        </div>
      </div>
      
      {/* Game controls */}
      <div className="p-4 flex justify-between items-center bg-violet-950">
        <div className="flex items-center space-x-2">
          <span className="text-sm">W,A,S,D to move</span>
          <span className="text-sm hidden md:inline">| Mouse to aim and shoot</span>
        </div>
        <button className="text-white hover:text-pink-500 flex items-center text-sm">
          <Flag size={16} className="mr-1" />
          <span>Report</span>
        </button>
      </div>
    </div>
  );
};

export default GamePlayer;