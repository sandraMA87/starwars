import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = () => {
  const [character, setCharacter] = useState([]);
  const [planet, setPlanet] = useState ([]);
  const [vehicles, setVehicles] = useState ([]);
  const {store, actions} = useContext(Context);

//   UseEffect con fetch para todas las variables de estado de: CHARACTERS, PLANETS, SPECIES
 
useEffect(() => {
  let getAllCharacters = {
	method: "GET",
	redirect: "follow"
  }
    fetch("https://www.swapi.tech/api/people/", getAllCharacters)
	.then((respuesta) => {respuesta.json()
    .then((results) => {setCharacter(results)})
    }).catch(error => {
		console.log(error, "este es el error");
  })


let getAllPlanets = {
	method: "GET",
	redirect: "follow"
  }
    fetch("https://www.swapi.tech/api/planets/", getAllPlanets)
	.then((respuesta) => {respuesta.json()
    .then((data) => {setPlanet(data.results)})
    }).catch(error => {
		console.log(error, "este es el error");
  })

  let getAllVehicles = {
	method: "GET",
	redirect: "follow"
  }
    fetch("https://www.swapi.tech/api/vehicles/", getAllVehicles)
	.then((respuesta) => {respuesta.json()
    .then((data) => {
		console.log(data.results)
		setVehicles(data.results)})
    }).catch(error => {
		console.log(error, "este es el error");
  })



}, [])

//   Las CARDS de CHARACTERS, PLANETS 

const handleAddFavoritos = (uid, name) => {
	actions.addFavorito(uid, name) 

}


 return (
    <>
	<div className="relative flex items-center">
		<div className="overflow-x-auto" style={{ maxWidth: '100vw' }}>
		<div className="overflow-x-scroll whitespace-nowrap flex flex-row">
			{character?.results?.map((element, key) =>{
				
				return (
					<>
					<div key={key} className="card-wrapper flex m-5">
						<img src={"https://starwars-visualguide.com/assets/img/characters/"+(key+1)+".jpg"} style={{width: '200px'}} alt='/' />
						<div className="card-body-cards">
							<h2 className="card-title fw-bold">{element.name}</h2>
							<p className="card-text">Gender: {character.gender}</p>
							<p className="card-text">Hair Color: {character.hair_color}</p>
							<Link to={`/character/${element.uid}`}>
							<button type="button" className="btn-1">Learn more</button>
							</Link>
							<button type="button" onClick={()=>handleAddFavoritos(element.uid, element.name)} className="btn-2 "><i className="fas fa-heart"></i></button>
					   </div>
					</div>
					</>
				)
			})}
          </div>
		</div>
	</div>

    <div className="realtive flex items-center">
		<div className="overflow-x-auto" style={{ maxWidth: '100vw' }}>
			<div className="overflow-x-scroll whitespace-nowrap flex flex-row">
				{planet?.map((element, key) => {
					return (
						<>
						<div key={key} className="card-wrapper flex m-5">

							<img src={"https://starwars-visualguide.com/assets/img/planets/"+(key+1)+".jpg"} onError={(e) => e.target.src = 'https://st4.depositphotos.com/1050267/24937/i/600/depositphotos_249378462-stock-photo-jupiter-planet-isolated-on-black.jpg'} style={{width: '200px'}} alt='/' />
							<div className="card-body-cards text-wrap" style= {{ height: '180px'}} >
								<h3 className="card-title fw-bold">{element.name}</h3>
								<p className="card-text">Population: {element.population}</p>
								<p className="card-text">Terrain: {element.terrain}</p>
								<Link to={`/planet/${element.uid}`}>
								<button className="btn-1">Learn more</button>
								</Link>
							    <button className="btn-2 "><i className="fas fa-heart"></i></button>
						   </div>
						 </div>
						
					</>
					)
				})}
			</div>
		</div>
	</div>

	<div className="realtive flex items-center">
		<div className="overflow-x-auto" style={{ maxWidth: '100vw' }}>
			<div className="overflow-x-scroll whitespace-nowrap flex flex-row">
				{vehicles?.map((element, key) => {
					return (
						<>
						<div key={key} className="card-wrapper flex m-5">
							<img src={"https://starwars-visualguide.com/assets/img/vehicles/"+(element.uid)+".jpg"} onError={(e) => e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsk5tHkHmjiarYTjPDrBYoFcHJbHmSdT28Iw_sW1buw&s'} style={{width: '200px', height:'200px'}}  alt='/' />
							<div className="card-body-cards text-wrap" style= {{ height: '180px'}} >
								<h3 className="card-title fw-bold">{element.name}</h3>
								<p className="card-text">Model: {element.model}</p>
								<p className="card-text">Length: {element.length}</p>
								<Link to={`/vehicles/${element.uid}`}>
								<button className="btn-1">Learn more</button>
								</Link>
							    <button className="btn-2 "><i className="fas fa-heart"></i></button>
						   </div>
						 </div>
						
					</>
					)
				})}
			</div>
		</div>
	</div>

	
	
	</>
  );
 }


Cards.propTypes = {
  match: PropTypes.object,
};
