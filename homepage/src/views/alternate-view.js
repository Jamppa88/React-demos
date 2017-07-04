import React from 'react';
import { Motion, spring } from 'react-motion';

export default function Alt(props){
	return(
		<Motion defaultStyle={{x: -500, y: 0}} style={{x: spring(0), y: spring(1)}}>
		{({x, y}) =>
			<div className="content" style={{transform: `translate3d(${x}px, 0px, 0px)`, opacity: y}}>
				<h2>This is some other page.</h2>
			</div>
		}</Motion>
	);
}

