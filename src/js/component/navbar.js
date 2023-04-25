import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	
	const handleDelFav = (uid, name) => {
		actions.borrarFavorito(uid, name);
	  };
	
	return (
	  <nav className="navbar navbar-light bg-black mb-4 p-1">
		<Link to="/">
		  <span className="navbar-brand mb-0 h1">
			<img
			  src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg"
			  className="img-responsive w-25 p-0 ms-5"
			></img>
		  </span>
		</Link>
		<div className="ml-auto">
		  <div className="dropdown me-5">
			<button
			  className="btn btn-dark dropdown-toggle"
			  type="button"
			  data-bs-toggle="dropdown"
			  aria-expanded="false"
			>
			  Mis Favoritos ({store.characters.length})
			</button>
			<ul className="dropdown-menu">
               {store.characters.map((item, index) => (
				<li>
				<a className="dropdown-item text-danger" href="#">
				 {item.name}
                      <button 
					    className="btn btn-link mx-2 text-danger"
                        style={{ marginLeft: "5px", textDecoration: "none"}}
                        onClick={() => handleDelFav(item.uid, item.name)}
                      >
						&#x1f525;
                    </button>
				</a>
			  </li>
			   ))}
			 </ul>
		  </div>
		</div>
	  </nav>
	);
  };
