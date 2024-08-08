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

    const handleRemoveFavorite = (uid, e) => {
        e.stopPropagation();
        actions.removeFavorite(uid);
    };

    return (
        <div className="dropdown-container">
            <Dropdown show={isOpen} onToggle={handleToggle}>
                <Dropdown.Toggle className="dropdown-toggle-custom" id="dropdown-basic" onClick={() => setIsOpen(!isOpen)}>
                    Favorites {store.favorites.length}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {store.favorites.length === 0 ? (
                        <Dropdown.Item>No favorites added</Dropdown.Item>
                    ) : (
                        store.favorites.map((fav, index) => (
                            <Dropdown.Item key={index} className="d-flex justify-content-between align-items-center">
                                <Link to={`/character/${fav.uid}`}>{fav.properties.name}</Link>
                                <Button
                                    variant="link"
                                    onClick={(e) => handleRemoveFavorite(fav.uid, e)}
                                >
                                    <i className="fas fa-trash-alt text-danger"></i>
                                </Button>
                            </Dropdown.Item>
                        ))
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default FavoritesDropdown;