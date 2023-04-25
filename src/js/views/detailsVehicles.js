import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

export const VehicleDetails = () => {
  const params = useParams();
  const [vehicle, setVehicle] = useState([]);
  console.log(params.id);

  useEffect(() => {
    const getVehicle = async () => {
      const response = await fetch(
        `https://www.swapi.tech/api/vehicles/${params.id}`
      );
      const data = await response.json();
      setVehicle(data.result.properties);
      console.log(data.result.properties);
    };

    getVehicle();
  }, []);

  return (
    <div className="container row container-details">
      {vehicle && (
        <>
          <div className="card mb-4 bg-warning">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
                  style={{ width: "350px" }}
                  className="img fluid rounded-start pt-2 pb-2 ms-2"
                  alt="..."
                />
              </div>
              <div className="card-body col-md-8 text-center">
                <h4 className="card-title text-danger fw-bold">{vehicle.name}</h4>
                <p className="card-text">
                  Star Wars es una saga cinematográfica de ciencia ficción
                  creada por George Lucas en 1977. La trama se centra en un
                  universo ficticio donde diferentes especies y planetas
                  conviven en medio de una lucha entre el bien y el mal. La
                  historia comienza con la Guerra de las Galaxias, donde el
                  Imperio Galáctico, liderado por el malvado Darth Vader, tiene
                  el control de la galaxia y la Rebelión busca derrotarlo. El
                  primer episodio, titulado "Una Nueva Esperanza", sigue las
                  aventuras de Luke Skywalker, un joven granjero de Tatooine,
                  quien descubre que tiene una conexión con la Fuerza, una
                  energía que fluye a través de todos los seres vivos. Junto con
                  la princesa Leia Organa y Han Solo, un contrabandista, Luke
                  lucha contra el Imperio y su líder, el Emperador Palpatine.
                </p>
              </div>
            </div>
          </div>
          <div className="h4 mb-4 p-2 text-danger border-bottom border-danger mt-5"></div>

          <div className="container mt-3 text-danger text-center">
            <div className="row g-0">
              <div className="col-md-2">
                <strong>Name</strong>
                <p>{vehicle.name}</p>
              </div>
              <div className="col-md-2">
                <strong>Cargo Capacity</strong>
                {vehicle.cargo_capacity ? (
                  <p>{vehicle.cargo_capacity}</p>
                ) : (
                  <p>N/A</p>
                )}
              </div>
              <div className="col-md-2">
                <strong>Model</strong>
                <p>{vehicle.model}</p>
              </div>
              <div className="col-md-2">
                <strong>Consumables</strong>
                <p>{vehicle.consumables}</p>
              </div>
              <div className="col-md-2">
                <strong>Length</strong>
                <p>{vehicle.length}</p>
              </div>
              <div className="col-md-2">
                <strong>Passengers</strong>
                <p>{vehicle.passengers}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
