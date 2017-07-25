import React from 'react';
import ReactDOM from 'react-dom';
import AppPage from './Apps/apps.js';
import HomePage from './components/homepage.js';
import InitiativeApp from './Apps/InitiativeApp/initiative-app.js';

import { HashRouter, Route, Switch} from 'react-router-dom';

import './style.css';

function App(props) {
	return(
		<div id="landing">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/apps" component={AppPage} />
				<Route path="/apps/initiative" component={InitiativeApp} />
			</Switch>
		</div>
	);
}

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>
	, document.getElementById('root')
);
