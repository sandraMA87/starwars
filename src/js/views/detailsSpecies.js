import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from "react";


export const SpecieDetails = () => {
    const { id } = useParams(); // 
    const [species, setSpecies] = useState(null); 
    console.log(id);

    useEffect(() => {
        const getSpecies = async () => {
            const response = await fetch(`https://www.swapi.tech/api/species/${id}`);
            const data = await response.json();
            setSpecies(data); 
        };

        getSpecies();
    }, [id]);


    return (
        <div className="container row container-details">
            {species && (
        <>
         <div className="card mb-4 bg-dark">
           <div className="row g-0">
            <div className="col-md-4">
                <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} style={{width: '300px'}} className="img fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 text-center">
                <div className="card-body">
                <h4 className="card-title">{species.name}</h4>
                <p className="card-text">
                Star Wars es una saga cinematográfica de ciencia ficción creada por George Lucas en 1977. La trama se centra en un universo ficticio donde diferentes especies y planetas conviven en medio de una lucha entre el bien y el mal. La historia comienza con la Guerra de las Galaxias, donde el Imperio Galáctico, liderado por el malvado Darth Vader, tiene el control de la galaxia y la Rebelión busca derrotarlo.
    
                El primer episodio, titulado "Una Nueva Esperanza", sigue las aventuras de Luke Skywalker, un joven granjero de Tatooine, quien descubre que tiene una conexión con la Fuerza, una energía que fluye a través de todos los seres vivos. Junto con la princesa Leia Organa y Han Solo, un contrabandista, Luke lucha contra el Imperio y su líder, el Emperador Palpatine.
                </p>
               </div>
           </div>
         </div>
       </div>
        <div className="h4 mb-4 p-2 text-danger border-bottom border-danger mt-5">
       </div>
    
       <div className="container mt-5 text-danger text-center">
        <div className="row g-0">
            <div className="col-md-2">
                <strong>Name</strong>
                <p>{species.name}</p>
            </div>
            <div className="col-md-2">
                <strong>Eye Color</strong>
                {species.eye_color ? (
               <p>{species.eye_color}</p>
               ) : (
              <p>N/A</p>
              )}
            </div>    
            <div className="col-md-2">
                <strong>Hair Color</strong>
                <p>{species.hair_color}</p>
            </div>   
            <div className="col-md-2">
                <strong>Skin Color</strong>
                <p>{species.skin_color}</p>
            </div>   
            <div className="col-md-2">
                <strong>Average Height</strong>
                <p>{species.average_height}</p>
            </div>   
            <div className="col-md-2">
                <strong>Language</strong>
                <p>{species.language}</p>
            </div>   
        </div>
        
     </div>
    </>
    )}
    </div>
    )
    

}