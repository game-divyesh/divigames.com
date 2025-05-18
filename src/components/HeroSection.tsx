import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-violet-900 to-indigo-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-teal-500"></div>
        <div className="absolute top-1/2 -right-24 w-40 sm:w-80 h-40 sm:h-80 rounded-full bg-purple-600"></div>
        <div className="absolute -bottom-24 left-1/3 w-36 sm:w-72 h-36 sm:h-72 rounded-full bg-pink-500"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">Play Awesome Games</span>
            <br className="hidden sm:block" />
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">Instantly in Your Browser</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-violet-100 mb-6 sm:mb-8 px-4">
            Thousands of free online games for every gamer. No downloads,
            no installations. Just click and play!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              to="/trending"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Trending Games
            </Link>
            <Link
              to="/new"
              className="bg-transparent border-2 border-white hover:border-teal-400 text-white hover:text-teal-400 font-bold py-3 px-6 sm:px-8 rounded-full transition-colors duration-300 flex items-center justify-center"
            >
              Explore New Games
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform">
        <svg
          className="h-8 sm:h-12 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-white dark:fill-gray-900"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;