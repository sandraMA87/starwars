import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = ({ props }) => {
  const [character, setCharacter] = useState([]);
  
  
  

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
						<div className="card-body">
							<h3 className="card-title fw-bold">{element?.name}</h3>
							<p className="card-text">Gender : {element?.gender}</p>
							<p className="card-text">Hair Color : {element?.hair_color}</p>
							<p className="card-text">Eye color : {element?.eye_color}</p>
							<button className="btn-1 bg-primary">Learn more</button>
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
