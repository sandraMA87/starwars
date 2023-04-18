import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = ({ props }) => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getAllCharacters();
  }, []);

  const getAllCharacters = () => {
    fetch("https://www.swapi.tech/api/people/")
	.then((respuesta) => respuesta.json())
    .then((data) => setCharacters(data))
    .catch((error) => console.log(error));
  };

 
 
 
 return (
    <div className="jumbotron">
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Cards.propTypes = {
  match: PropTypes.object,
};
