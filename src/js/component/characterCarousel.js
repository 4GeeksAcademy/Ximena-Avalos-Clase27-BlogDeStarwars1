import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import CharacterCard from './ characterCard';
import { Carousel } from 'react-bootstrap';
import "../../styles/styles.css";

const CharacterCarousel = () => {
    const { store, actions } = useContext(Context);
  
    useEffect(() => {
      actions.loadPeople();
    }, []);
  
    console.log("Store people data:", store.people);  

  
    return (
      <div className="main">
        <h2 className="main_heading">Star Wars Characters</h2>
        <div className="cards">
          <div className="cards_inner">
            {store.people.map(character => (
              <CharacterCard key={character.uid} character={character} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CharacterCarousel;