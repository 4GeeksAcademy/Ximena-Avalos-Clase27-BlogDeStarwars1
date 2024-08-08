import React from 'react';
import { Link } from 'react-router-dom';
import FavoritesDropdown from './favoritesDropdown';

export const Navbar = () => {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3 small-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <div className="logo-container">
            <img src="https://static.vecteezy.com/system/resources/previews/027/127/457/non_2x/star-wars-logo-star-wars-icon-transparent-free-png.png" alt="Star Wars Logo" className="logo-img" />
          </div>
        </Link>
        <div className="d-flex align-items-center">
          <button onClick={toggleDarkMode} className="btn btn-dark mr-2">Dark Mode</button>
          <FavoritesDropdown />
        </div>
      </div>
    </nav>
  );
};