import page from 'page';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/homepage.js';
import AppPage from './Apps/apps.js';
import InitiativeApp from './Apps/InitiativeApp/initiative-app.js';
import './style.css';

page("/home", () => {
	ReactDOM.render(<HomePage />, document.getElementById('root'));
});

page("/apps", () => {
	ReactDOM.render(<AppPage />, document.getElementById('root'));
})

page("/apps/initiative", () => {
		ReactDOM.render(<InitiativeApp />, document.getElementById('root'));
})

page("*", () => page.redirect("/home"));
page.start();
