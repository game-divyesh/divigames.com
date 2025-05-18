import { Game, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Action', slug: 'action' },
  { id: '2', name: 'Adventure', slug: 'adventure' },
  { id: '3', name: 'Arcade', slug: 'arcade' },
  { id: '4', name: 'IO Games', slug: 'io-games' },
  { id: '5', name: 'Multiplayer', slug: 'multiplayer' },
  { id: '6', name: 'Racing', slug: 'racing' },
  { id: '7', name: 'Sports', slug: 'sports' },
  { id: '8', name: 'Strategy', slug: 'strategy' },
  { id: '9', name: 'Puzzle', slug: 'puzzle' },
];

export const games: Game[] = [
    {
      id: '1',
      title: 'Block Blast',
      description: 'Block Blast is a fast-paced puzzle game where players drag and drop various block shapes onto a grid to create and clear full rows and columns. The game challenges your spatial reasoning and planning skills in a relaxing yet addictive environment.',
      thumbnail: '../src/assest/thumbnails/block_blast.png',
      category: ['Puzzle', 'Casual'],
      rating: 4.6,
      plays: 18900,
      isTrending: true,
      url:"https://game-divyesh.github.io/divi_BlockBlast/"
    },
    {
      id: '2',
      title: 'ScrewNutPuzzle',
      description: 'ScrewNutPuzzle is a mechanical logic puzzle where players must unscrew and rearrange nuts, bolts, and metal parts to solve intricate 3D puzzles. It features realistic physics and increasing complexity.',
      thumbnail: '../src/assest/thumbnails/screw_nut_puzzle.png',
      category: ['Puzzle', 'Brain Teaser'],
      rating: 4.5,
      plays: 12200,
      isTrending: true,
      url:"https://game-divyesh.github.io/divi_Screw_Nut_Puzzle/"
    },
    {
      id: '3',
      title: 'Bus Jam',
      description: 'Bus Jam is a traffic jam logic puzzle where players must navigate and move buses out of a crowded parking lot. Strategically slide vehicles in the correct order to complete each challenging level.',
      thumbnail: '../src/assest/thumbnails/bus_jam.png',
      category: ['Puzzle', 'Strategy'],
      rating: 4.7,
      plays: 14350,
      isTrending: true,
      url:"https://game-divyesh.github.io/divi_BusJam/"
    }
];

export const getGameById = (id: string): Game | undefined => {
  return games.find(game => game.id === id);
};

export const getGamesByCategory = (category: string): Game[] => {
  return games.filter(game => 
    game.category.some(cat => cat.toLowerCase() === category.toLowerCase())
  );
};

export const getTrendingGames = (): Game[] => {
  return games.filter(game => game.isTrending);
};

export const getNewGames = (): Game[] => {
  return games.filter(game => game.isNew);
};

export const searchGames = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return games.filter(game => 
    game.title.toLowerCase().includes(lowercaseQuery) || 
    game.description.toLowerCase().includes(lowercaseQuery) ||
    game.category.some(cat => cat.toLowerCase().includes(lowercaseQuery))
  );
};