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
					<button className="menuButton" value="Portfolio" onClick={props.onClick}>Portfolio</button>

				</div>

				<div id="links">
					<a href="https://www.facebook.com/Jamppa88" target="_blank"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
					<a href="https://www.linkedin.com/in/jani-kerttula-54938b12b/" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
					<a href="https://github.com/Jamppa88" target="_blank"><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
					<a href="https://docs.google.com/document/d/1wQ9QszVk0JQK4iGqov96_qgQ6GOQKMZ_jRwGC8QCwAQ/edit?usp=sharing" target="_blank"><i className="fa fa-file-text fa-2x" aria-hidden="true"></i> <span>CV</span></a>
				</div>
			</div>
		</div>
	);
}

/*function ToCV() {
	const url = "https://docs.google.com/document/d/1wQ9QszVk0JQK4iGqov96_qgQ6GOQKMZ_jRwGC8QCwAQ/edit?usp=sharing";
	window.open(url);
}*/


