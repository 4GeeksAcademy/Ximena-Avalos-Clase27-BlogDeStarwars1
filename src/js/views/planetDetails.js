import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  
import { Context } from '../store/appContext';
import '../../styles/styles.css'; 

const PlanetDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [planet, setPlanet] = useState(null);
  
    useEffect(() => {
      const fetchPlanet = async () => {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
        const data = await response.json();
        setPlanet(data.result.properties);
      };
      fetchPlanet();
    }, [id]);
  
    if (!planet) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="container detail-container">
        <div className="img-container">
          <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={planet.name} className="img-fluid" />
        </div>
        <div className="info-container">
          <h1>{planet.name}</h1>
          <p>{planet.description || 'No description available.'}</p>
          <table className="table detail-table">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{planet.name}</td>
              </tr>
              <tr>
                <th scope="row">Climate</th>
                <td>{planet.climate}</td>
              </tr>
              <tr>
                <th scope="row">Diameter</th>
                <td>{planet.diameter} km</td>
              </tr>
              <tr>
                <th scope="row">Gravity</th>
                <td>{planet.gravity}</td>
              </tr>
              <tr>
                <th scope="row">Orbital Period</th>
                <td>{planet.orbital_period} days</td>
              </tr>
              <tr>
                <th scope="row">Population</th>
                <td>{planet.population}</td>
              </tr>
              <tr>
                <th scope="row">Rotation Period</th>
                <td>{planet.rotation_period} hours</td>
              </tr>
              <tr>
                <th scope="row">Surface Water</th>
                <td>{planet.surface_water} %</td>
              </tr>
              <tr>
                <th scope="row">Terrain</th>
                <td>{planet.terrain}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn back-button mt-3" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    );
  };
  
  export default PlanetDetails;