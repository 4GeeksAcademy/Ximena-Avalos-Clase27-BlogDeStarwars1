import React from 'react';
import { Link } from 'react-router-dom';
import FavoritesDropdown from './favoritesDropdown';
import '../../styles/styles.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light small-navbar">
            <div className="container d-flex justify-content-between align-items-center">
                <Link className="navbar-brand" to="/">
                    <div className="logo-container">
                        <img src="https://static.vecteezy.com/system/resources/previews/027/127/457/non_2x/star-wars-logo-star-wars-icon-transparent-free-png.png" alt="Star Wars Logo" className="logo-img" />
                    </div>
                </Link>
                <div className="d-flex align-items-center dropdown-container">
                    <FavoritesDropdown />
                </div>
            </div>
        </nav>
    );
};