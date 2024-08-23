import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import PlanetCard from './ planetCard';
import { Carousel } from 'react-bootstrap';
import "../../styles/styles.css";

const PlanetCarousel = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPlanets();
    }, []);

    console.log("Store planet data:", store.planets);  

    return (
        <div className="main">
            <h2 className="main_heading">Planets</h2>
            <div className="cards">
                <div className="cards_inner">
                    {store.planets.map(planet => (
                        <PlanetCard key={planet.uid} planet={planet} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlanetCarousel;