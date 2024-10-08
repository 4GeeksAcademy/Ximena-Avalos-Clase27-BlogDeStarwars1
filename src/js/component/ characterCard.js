import React, { useContext, useState, useEffect } from 'react';
import { Card, Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import '../../styles/styles.css'; 

const CharacterCard = ({ character }) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(store.favoriteCharacters.some(fav => fav.uid === character.uid));

    useEffect(() => {
        setIsFavorite(store.favoriteCharacters.some(fav => fav.uid === character.uid));
    }, [store.favoriteCharacters]);

    const toggleFavorite = () => {
        if (isFavorite) {
            actions.removeFavoriteCharacter(character.uid);
        } else {
            actions.addFavoriteCharacter(character);
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <Card className="card-custom">
            <Card.Img 
                variant="top" 
                src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
                className="card-img-top-custom" 
            />
            <Card.Body className="card-body-custom">
                <Card.Title className="card-title-custom">{character.properties.name}</Card.Title>
                <Card.Text className="card-text-custom">Gender: {character.properties.gender}</Card.Text>
                <Card.Text className="card-text-custom">Hair Color: {character.properties.hair_color}</Card.Text>
                <Card.Text className="card-text-custom">Eye Color: {character.properties.eye_color}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/character/${character.uid}`}>
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

CharacterCard.propTypes = {
    character: PropTypes.object.isRequired
};

export default CharacterCard;