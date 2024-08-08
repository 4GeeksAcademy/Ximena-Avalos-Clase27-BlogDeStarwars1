import React from 'react';
import CharacterCarousel from '../component/characterCarousel';
import PlanetCarousel from '../component/planetCarousel';
import '../../styles/styles.css';

const Home = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-5">Star Wars Universe</h1>
            <CharacterCarousel />
            <PlanetCarousel />
        </div>
    );
};

export default Home;