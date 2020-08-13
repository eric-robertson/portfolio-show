import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

export default function App() { 

	// Sets up routing for the application
	return (
		<Router>
			<div>
				<Switch>
					{/* Routing here to different pages, passing in urls */}
					<Route path="/:user/:page"> <Portfolio /> </Route>
					<Route path="/"> <Home /> </Route>
				</Switch>
			</div>
		</Router> 
	)
}
		