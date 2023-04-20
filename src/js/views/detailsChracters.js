import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from "react";


export const CharacterDetails = () => {
    const { id } = useParams(); // 
    const [character, setCharacter] = useState(null); 
    console.log(id);

    useEffect(() => {
        const getCharacter = async () => {
            const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
            const data = await response.json();
            setCharacter(data); 
        };

        getCharacter();
    }, [id]);



    return (
        <div className="container row container-details">
            {character && (
        <>
         <div className="card mb-4 bg-dark">
           <div className="row g-0">
            <div className="col-md-4">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} style={{width: '300px'}} className="img fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 text-center">
                <div className="card-body">
                <h4 className="card-title">{character.name}</h4>
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
                <p>{character.name}</p>
            </div>
            <div className="col-md-2">
                <strong>Birth Year</strong>
                <p>{character.birth_year}</p>
            </div>    
            <div className="col-md-2">
                <strong>Eye Color</strong>
                <p>{character.eye_color}</p>
            </div>   
            <div className="col-md-2">
                <strong>Hair Color</strong>
                <p>{character.hair_color}</p>
            </div>   
            <div className="col-md-2">
                <strong>Skin Color</strong>
                <p>{character.skin_color}</p>
            </div>   
            <div className="col-md-2">
                <strong>Height</strong>
                <p>{character.height}</p>
            </div>   
        </div>
        
     </div>
    </>
    )}
    </div>
    )
    

}
