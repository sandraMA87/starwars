import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	
	const handleDelFav = (uid, name) => {
		actions.borrarFavorito(uid, name);
	  };
	
	return (
	  <nav className="navbar navbar-light bg-black mb-3 p-1">
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
				<a className="dropdown-item" href="#">
				 {item.name}<span className="">
                      <i
                        className="fa-solid fa-delete-left"
                        style={{ marginLeft: "5px" }}
                        onClick={() => handleDelFav(item.uid, item.name)}
                      />
                    </span>
				</a>
			  </li>
			   ))}
			 </ul>
		  </div>
		</div>
	  </nav>
	);
  };
