import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = () => {
  const [character, setCharacter] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const { store, actions } = useContext(Context);

  //   UseEffect con el fetch de todas las variables de estado tanto de: CHARACTERS, PLANETS, SPECIES

  useEffect(() => {
    let getAllCharacters = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://www.swapi.tech/api/people/", getAllCharacters)
      .then((respuesta) => {
        respuesta.json().then((results) => {
          setCharacter(results);
        });
      })
      .catch((error) => {
        console.log(error, "este es el error");
      });

    
    
      let getAllPlanets = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://www.swapi.tech/api/planets/", getAllPlanets)
      .then((respuesta) => {
        respuesta.json().then((data) => {
          setPlanet(data.results);
        });
      })
      .catch((error) => {
        console.log(error, "este es el error");
      });

   
   
      let getAllVehicles = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://www.swapi.tech/api/vehicles/", getAllVehicles)
      .then((respuesta) => {
        respuesta.json().then((data) => {
          console.log(data.results);
          setVehicles(data.results);
        });
      })
      .catch((error) => {
        console.log(error, "este es el error");
      });
  }, []);

  // LA FUNCION DE FAVORITOS

  const handleAddFavoritos = (uid, name) => {
    actions.addFavorito(uid, name);
  };

  // CARDS DE CHARACTERS, PLANETS Y VEHICLES

  return (
    <>
      <div className="relative flex items-center">
        <div className="overflow-x-auto" style={{ maxWidth: "100vw" }}>
          <div className="overflow-x-scroll whitespace-nowrap flex flex-row">
            {character?.results?.map((element, key) => {
              return (
                <>
                  <div key={key} className="card-wrapper flex m-5">
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/characters/" +
                        (key + 1) +
                        ".jpg"
                      }
                      style={{ width: "200px" }}
                      alt="/"
                    />
                    <div className="card-body-cards">
                      <h2 className="card-title fw-bold">{element.name}</h2>
                      <Link to={`/character/${element.uid}`}>
                        <button type="button" className="btn-1">
                          Learn more
                        </button>
                      </Link>
                      {store.characters.some(
                        (character) =>
                          character.uid === element.uid &&
                          character.name === element.name
                      ) ? (
                        <button
                          type="button"
                          onClick={() =>
                            handleAddFavoritos(element.uid, element.name)
                          }
                          className="btn-2"
                        >
                          <i className="fa-solid fa-heart text-danger"></i>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            handleAddFavoritos(element.uid, element.name)
                          }
                          className="btn-2"
                        >
                          <i className="fa-regular fa-heart"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="realtive flex items-center">
        <div className="overflow-x-auto" style={{ maxWidth: "100vw" }}>
          <div className="overflow-x-scroll whitespace-nowrap flex flex-row">
            {planet?.map((element, key) => {
              return (
                <>
                  <div key={key} className="card-wrapper flex m-5">
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/planets/" +
                        (key + 1) +
                        ".jpg"
                      }
                      onError={(e) =>
                        (e.target.src =
                          "https://st4.depositphotos.com/1050267/24937/i/600/depositphotos_249378462-stock-photo-jupiter-planet-isolated-on-black.jpg")
                      }
                      style={{ width: "200px" }}
                      alt="/"
                    />
                    <div
                      className="card-body-cards text-wrap"
                      style={{ height: "100px" }}
                    >
                      <h3 className="card-title fw-bold">{element.name}</h3>
                      <Link to={`/planet/${element.uid}`}>
                        <button type="button" className="btn-1">
                          Learn more
                        </button>
                      </Link>
                      {store.characters.some(
                        (character) =>
                          character.uid === element.uid &&
                          character.name === element.name
                      ) ? (
                        <button
                          type="button"
                          onClick={() =>
                            handleAddFavoritos(element.uid, element.name)
                          }
                          className="btn-2"
                        >
                          <i className="fa-solid fa-heart text-danger"></i>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            handleAddFavoritos(element.uid, element.name)
                          }
                          className="btn-2"
                        >
                          <i className="fa-regular fa-heart"></i>
                      </button>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="realtive flex items-center">
        <div className="overflow-x-auto" style={{ maxWidth: "100vw" }}>
          <div className="overflow-x-scroll whitespace-nowrap flex flex-row">
            {vehicles?.map((element, key) => {
              return (
                <>
                  <div key={key} className="card-wrapper flex m-5">
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/vehicles/" +
                        element.uid +
                        ".jpg"
                      }
                      onError={(e) =>
                        (e.target.src =
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsk5tHkHmjiarYTjPDrBYoFcHJbHmSdT28Iw_sW1buw&s")
                      }
                      style={{ width: "200px", height: "200px" }}
                      alt="/"
                    />
                    <div
                      className="card-body-cards text-wrap"
                      style={{ height: "100px" }}
                    >
                      <h3 className="card-title fw-bold">{element.name}</h3>
                      <Link to={`/vehicles/${element.uid}`}>
                        <button type="button" className="btn-1">
                          Learn more
                        </button>
                      </Link>
                      {store.characters.some(
                        (character) =>
                          character.uid === element.uid &&
                          character.name === element.name
                      ) ? (
                        <button
                          type="button"
                          onClick={() =>
                            handleAddFavoritos(element.uid, element.name)
                          }
                          className="btn-2"
                        >
                          <i className="fa-solid fa-heart text-danger"></i>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            handleAddFavoritos(element.uid, element.name)
                          }
                          className="btn-2"
                        >
                          <i className="fa-regular fa-heart"></i>
                      </button>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

Cards.propTypes = {
  match: PropTypes.object,
};
