import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GameDetailsPage from './pages/GameDetailsPage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import TrendingPage from './pages/TrendingPage';
import NewGamesPage from './pages/NewGamesPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:id" element={<GameDetailsPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/search/:query" element={<SearchPage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/new" element={<NewGamesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;