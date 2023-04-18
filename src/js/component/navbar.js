import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
	  <nav className="navbar navbar-light bg-white mb-3 p-1">
		<Link to="/">
		  <span className="navbar-brand mb-0 h1">
			<img
			  src="https://media.s-bol.com/qQx5MY9Bg75G/550x278.jpg"
			  class="img-responsive w-25 mt-3 ms-5"
			></img>
		  </span>
		</Link>
		<div className="ml-auto">
		  <div class="dropdown">
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
