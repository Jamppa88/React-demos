import React from 'react';

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

function getAge() {
	const bDate = new Date("1988-08-01");
	const age = new Date().getFullYear() - bDate.getFullYear();
	const month = new Date().getMonth() - bDate.getMonth();
	if (month < 0) {return age - 1;}
	else {return age;}
}
