import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories } from '../data/games';

const CategoryFilter: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  return (
    <div className="flex flex-wrap gap-2 py-4">
      <Link
        to="/"
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          !category
            ? 'bg-violet-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        All Games
      </Link>
      
      {categories.map((cat) => (
        <Link
          key={cat.id}
          to={`/category/${cat.slug}`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            category === cat.slug
              ? 'bg-violet-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilter;