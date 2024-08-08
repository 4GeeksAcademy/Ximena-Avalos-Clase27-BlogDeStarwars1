import React, { useContext, useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const FavoritesDropdown = () => {
    const { store, actions } = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (newState) => {
        setIsOpen(newState);
    };

    const handleRemoveFavoriteCharacter = (uid, e) => {
        e.stopPropagation();
        actions.removeFavoriteCharacter(uid);
    };

    const handleRemoveFavoritePlanet = (uid, e) => {
        e.stopPropagation();
        actions.removeFavoritePlanet(uid);
    };

    const favoriteCharacters = store.favoriteCharacters || [];
    const favoritePlanets = store.favoritePlanets || [];

    return (
        <Dropdown show={isOpen} onToggle={handleToggle} className="dropdown-container">
            <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={() => setIsOpen(!isOpen)}>
                Favorites {favoriteCharacters.length + favoritePlanets.length}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {favoriteCharacters.length === 0 && favoritePlanets.length === 0 ? (
                    <Dropdown.Item>No favorites added</Dropdown.Item>
                ) : (
                    <>
                        {favoriteCharacters.map((fav, index) => (
                            <Dropdown.Item key={index} className="d-flex justify-content-between align-items-center">
                                <Link to={`/character/${fav.uid}`}>{fav.properties.name}</Link>
                                <Button
                                    variant="link"
                                    onClick={(e) => handleRemoveFavoriteCharacter(fav.uid, e)}
                                >
                                    <i className="fas fa-trash-alt text-danger"></i>
                                </Button>
                            </Dropdown.Item>
                        ))}
                        {favoritePlanets.map((fav, index) => (
                            <Dropdown.Item key={index} className="d-flex justify-content-between align-items-center">
                                <Link to={`/planet/${fav.uid}`}>{fav.properties.name}</Link>
                                <Button
                                    variant="link"
                                    onClick={(e) => handleRemoveFavoritePlanet(fav.uid, e)}
                                >
                                    <i className="fas fa-trash-alt text-danger"></i>
                                </Button>
                            </Dropdown.Item>
                        ))}
                    </>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default FavoritesDropdown;