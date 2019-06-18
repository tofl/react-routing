import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// Custom imports
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import User from './components/Users';
import Notfound from './components/Notfound';

const Routing = (
	<Router>
		<div>
			{/* NAV : */}
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/users" >Users</Link></li>
				<li><Link to="/contact" >Contact</Link></li>
			</ul>
			
			<Switch>
			<Route exact path="/" component={ App } />
			<Route path="/users" component={ User } />
			<Route path="/contact" component={ Contact } />
			<Route component={ Notfound } />
			</Switch>
		</div>
	</Router>
);

ReactDOM.render(Routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
