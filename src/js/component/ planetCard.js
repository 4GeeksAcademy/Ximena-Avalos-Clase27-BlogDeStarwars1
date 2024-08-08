import React, { useContext, useState, useEffect } from 'react';
import { Card, Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import '../../styles/styles.css'; 

const PlanetCard = ({ planet }) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(store.favoritePlanets.some(fav => fav.uid === planet.uid));

    useEffect(() => {
        setIsFavorite(store.favoritePlanets.some(fav => fav.uid === planet.uid));
    }, [store.favoritePlanets]);

    const toggleFavorite = () => {
        if (isFavorite) {
            actions.removeFavoritePlanet(planet.uid);
        } else {
            actions.addFavoritePlanet(planet);
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <Card className="card-custom">
            <Card.Img 
                variant="top" 
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} 
                className="card-img-top-custom" 
            />
            <Card.Body className="card-body-custom">
                <Card.Title className="card-title-custom">{planet.properties.name}</Card.Title>
                <Card.Text className="card-text-custom">Climate: {planet.properties.climate}</Card.Text>
                <Card.Text className="card-text-custom">Terrain: {planet.properties.terrain}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/planet/${planet.uid}`}>
                        <Button className="button-custom">Learn more!</Button>
                    </Link>
                    <Button variant="link" onClick={toggleFavorite} className="button-favorite-custom">
                        <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

PlanetCard.propTypes = {
    planet: PropTypes.object.isRequired
};

export default PlanetCard;