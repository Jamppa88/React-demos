import React from 'react';
import { Motion, spring, presets } from 'react-motion';

export default function Contact(props){
	return(
		<Motion defaultStyle={{x: -500, y: 0}} style={{x: spring(0, {stiffness: 39, damping: 9}), y: spring(0.9), config: presets.gentle}}>
		{({x, y}) =>
			<div className="view" style={{transform: `translate3d(${x}px, 0px, 0px)`, opacity: y}}>
				<p>Minut saa parhaiten kiinni sähköpostilla ja puhelimella.</p>
				<h2>Puhelin:</h2>
				<p>040-5289578</p>
				<h2>Sähköposti:</h2>
				<p className="email">janikerttula88@gmail.com</p>
				<p className="email">K8958@student.jamk.fi</p>

			</div>
		}</Motion>
	);
}

