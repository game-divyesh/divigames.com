import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, GamepadIcon } from 'lucide-react';
import { categories } from '../data/games';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search/${searchQuery}`;
    }
  };

  return (
    <header className="sticky top-0 bg-violet-900 text-white shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl sm:text-2xl font-bold">
            <GamepadIcon className="h-6 w-6 sm:h-8 sm:w-8 text-teal-400" />
            <span className="bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
              CrazyGames
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 hover:text-teal-400 transition-colors"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                <span>Categories</span>
              </button>
              {isCategoriesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg text-gray-800 z-50">
                  <div className="p-2 grid grid-cols-1 gap-1">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.slug}`}
                        className="px-4 py-2 hover:bg-violet-100 rounded-md transition-colors"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/trending" className="hover:text-teal-400 transition-colors">
              Trending
            </Link>
            <Link to="/new" className="hover:text-teal-400 transition-colors">
              New
            </Link>
          </nav>

          {/* Search */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search games..."
                className="w-full py-2 px-4 pr-10 rounded-full bg-violet-800 text-white placeholder-violet-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-violet-300 hover:text-white"
              >
                <Search size={18} />
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-violet-800">
          <div className="container mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  className="w-full py-2 px-4 pr-10 rounded-full bg-violet-700 text-white placeholder-violet-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-violet-300 hover:text-white"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>
            <nav className="flex flex-col space-y-3">
              <button
                className="text-left py-2 hover:text-teal-400 transition-colors w-full"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                Categories
              </button>
              {isCategoriesOpen && (
                <div className="pl-4 flex flex-col space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="py-2 hover:text-teal-400 transition-colors"
                      onClick={() => {
                        setIsCategoriesOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
              <Link 
                to="/trending" 
                className="py-2 hover:text-teal-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Trending
              </Link>
              <Link 
                to="/new" 
                className="py-2 hover:text-teal-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                New
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;