import React from 'react';
import Header from '../component/header';
import CharacterCarousel from '../component/characterCarousel';
import PlanetCarousel from '../component/planetCarousel';
import '../../styles/styles.css';

const Home = () => {
    return (
        <div className="container mt-5">
      <Header />
            <CharacterCarousel />
            <PlanetCarousel />
        </div>
    );
};

export default Home;