import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GameGrid from '../components/GameGrid';
import { searchGames } from '../data/games';
import { Search } from 'lucide-react';

const SearchPage: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [results, setResults] = useState(searchGames(query || ''));
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.history.pushState(null, '', `/search/${searchQuery}`);
      setResults(searchGames(searchQuery));
    }
  };
  
  useEffect(() => {
    if (query) {
      setSearchQuery(query);
      setResults(searchGames(query));
    }
  }, [query]);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-6">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Search Games</h1>
          
          <form onSubmit={handleSearch} className="relative mb-8">
            <input
              type="text"
              placeholder="What do you want to play today?"
              className="w-full py-3 px-4 pr-12 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-teal-500"
            >
              <Search size={20} />
            </button>
          </form>
        </div>
        
        {query && (
          <div className="mb-4">
            <h2 className="text-xl font-medium">
              {results.length === 0 
                ? `No results found for "${query}"` 
                : `Search results for "${query}" (${results.length})`}
            </h2>
          </div>
        )}
        
        <GameGrid games={results} />
        
        {results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">No games found matching your search.</p>
            <p className="text-gray-600 dark:text-gray-400">Try different keywords or browse our categories.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;