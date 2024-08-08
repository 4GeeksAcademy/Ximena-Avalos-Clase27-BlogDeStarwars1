import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.css';
import FavoritesDropdown from './favoritesDropdown';

export const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Verificar el modo inicial según la clase en el cuerpo
        const initialMode = document.body.classList.contains('dark-mode');
        setIsDarkMode(initialMode);
    }, []);

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        setIsDarkMode(!isDarkMode);
    };

  return (
    <nav className="navbar navbar-light bg-light mb-3 small-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <div className="logo-container">
            <img src="https://static.vecteezy.com/system/resources/previews/027/127/457/non_2x/star-wars-logo-star-wars-icon-transparent-free-png.png" alt="Star Wars Logo" className="logo-img" />
          </div>
        </Link>
        <div className="ml-auto d-flex align-items-center">
                <button onClick={toggleDarkMode} className="dark-mode-toggle btn btn-secondary mr-3">
                    {isDarkMode ? 'Light Side' : 'Dark Side'}
                </button>
          <FavoritesDropdown />
        </div>
      </div>
    </nav>
  );
};