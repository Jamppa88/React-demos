import React from 'react';
import { Motion, spring } from 'react-motion';

export default function Header(props) {

	return(
		<div id="header_outline">
			<div id="header">
				<Motion defaultStyle={{x: 0}} style={{x: spring(1)}}>
				{({x}) =>
					<div id="headline" style={{opacity: x}}>
						<h1>{props.headline}</h1>
					</div>
				}
				</Motion>
				<div id="menu">
					<button className="menuButton" value="Jani Kerttula" onClick={props.onClick}>Etusivu</button>
					<button className="menuButton" value="Yhteystiedot" onClick={props.onClick}>Yhteystiedot</button>
					<button className="menuButton_2" onClick={ToCV} >Namiska</button>
				</div>
			</div>
		</div>
	);
}

function ToCV() {
	const url = "https://docs.google.com/document/d/1wQ9QszVk0JQK4iGqov96_qgQ6GOQKMZ_jRwGC8QCwAQ/edit?usp=sharing";
	window.open(url);
}


