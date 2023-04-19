import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
	  <nav className="navbar navbar-light bg-black mb-3 p-1">
		<Link to="/">
		  <span className="navbar-brand mb-0 h1">
			<img
			  src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg"
			  class="img-responsive w-25 p-0 ms-5"
			></img>
		  </span>
		</Link>
		<div className="ml-auto">
		  <div class="dropdown me-5">
			<button
			  class="btn btn-dark dropdown-toggle"
			  type="button"
			  data-bs-toggle="dropdown"
			  aria-expanded="false"
			>
			  Mis Favoritos
			</button>
			<ul class="dropdown-menu">
			  <li>
				<a class="dropdown-item" href="#">
				  Action
				</a>
			  </li>
			  <li>
				<a class="dropdown-item" href="#">
				  Another action
				</a>
			  </li>
			  <li>
				<a class="dropdown-item" href="#">
				  Something else here
				</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	);
  };
