import React from 'react';
import { getAge } from '../functions/functions.js';

export default function Sidebar(props) {

	return(
		<div id="sidebar" style={props.style}>
			<img id="photo" src="/Jani_Kerttula.jpg" alt="Oma kuva"/>
			<ul>
				<li>Jani Kerttula</li>
				<li>Ikä: {getAge()}</li>
			</ul>
		</div>
	);
}




