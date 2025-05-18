import React from 'react';
import { Link } from 'react-router-dom';
import { GamepadIcon, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-violet-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold mb-4">
              <GamepadIcon className="h-6 w-6 text-teal-400" />
              <span className="bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
                CrazyGames
              </span>
            </Link>
            <p className="text-violet-200 text-sm">
              The #1 place to play free games online. Featuring racing games, action games, 
              shooting games, puzzle games and many more!
            </p>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-violet-200 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trending" className="text-violet-200 hover:text-teal-400 transition-colors">
                  Trending Games
                </Link>
              </li>
              <li>
                <Link to="/new" className="text-violet-200 hover:text-teal-400 transition-colors">
                  New Games
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-violet-200 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/action" className="text-violet-200 hover:text-teal-400 transition-colors">
                  Action Games
                </Link>
              </li>
              <li>
                <Link to="/category/adventure" className="text-violet-200 hover:text-teal-400 transition-colors">
                  Adventure Games
                </Link>
              </li>
              <li>
                <Link to="/category/puzzle" className="text-violet-200 hover:text-teal-400 transition-colors">
                  Puzzle Games
                </Link>
              </li>
              <li>
                <Link to="/category/racing" className="text-violet-200 hover:text-teal-400 transition-colors">
                  Racing Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-violet-200 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-violet-200 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-violet-200 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-violet-200 hover:text-teal-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="py-2 px-3 rounded-l-md bg-violet-800 text-white placeholder-violet-300 focus:outline-none focus:ring-1 focus:ring-teal-400 w-full"
                />
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-r-md transition-colors"
                >
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-violet-800 mt-8 pt-6 text-center text-violet-200 text-sm">
          <p>© 2025 CrazyGames Clone. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/terms" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="hover:text-teal-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;