import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Cards } from "./views/cards";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

import { CharacterDetails } from "./views/detailsChracters";
import { PlanetDetails } from "./views/detailsPlanets";
import { VehicleDetails } from "./views/detailsVehicles";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/cards" element={<Cards />} />
						<Route path="/character/:id" element={<CharacterDetails />} />
						<Route path="/planet/:id" element={<PlanetDetails />} />
						<Route path="/vehicles/:id" element={<VehicleDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
