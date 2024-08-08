import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  
import { Context } from '../store/appContext';
import '../../styles/styles.css'; 
import imageUrls from '../component/imageUrls';

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
      const fetchCharacter = async () => {
          const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
          const data = await response.json();
          setCharacter(data.result.properties);
      };
      fetchCharacter();
  }, [id]);

  if (!character) {
      return <div>Loading...</div>;
  }

  return (
      <div className="container mt-5">
          <div className="row">
              <div className="col-md-6">
                  <img src={imageUrls[character.name] || "https://via.placeholder.com/800x600"} alt={character.name} className="img-fluid" />
              </div>
              <div className="col-md-6">
                  <h1>{character.name}</h1>
                  <p>{character.description || 'No description available.'}</p>
                  <table className="table">
                      <tbody>
                          <tr>
                              <th scope="row">Name</th>
                              <td>{character.name}</td>
                          </tr>
                          <tr>
                              <th scope="row">Birth Year</th>
                              <td>{character.birth_year}</td>
                          </tr>
                          <tr>
                              <th scope="row">Gender</th>
                              <td>{character.gender}</td>
                          </tr>
                          <tr>
                              <th scope="row">Height</th>
                              <td>{character.height} cm</td>
                          </tr>
                          <tr>
                              <th scope="row">Mass</th>
                              <td>{character.mass} kg</td>
                          </tr>
                          <tr>
                              <th scope="row">Hair Color</th>
                              <td>{character.hair_color}</td>
                          </tr>
                          <tr>
                              <th scope="row">Skin Color</th>
                              <td>{character.skin_color}</td>
                          </tr>
                          <tr>
                              <th scope="row">Eye Color</th>
                              <td>{character.eye_color}</td>
                          </tr>
                      </tbody>
                  </table>
                  <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>Back</button>
              </div>
          </div>
      </div>
  );
};

export default CharacterDetails;