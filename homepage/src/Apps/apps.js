import React from 'react';
import { Link } from 'react-router-dom';
import { Motion, spring } from 'react-motion';

import './apps.css';

export default function AppPage(props) {

	return (
		<div id="app-wrapper">
			<Motion defaultStyle={{opa: 0, y: 100}} style={{opa: spring(1, {stiffness: 10, damping: 9}), y: spring(0, {stiffness: 39, damping: 9})}}>
				{({opa, y}) =>
					<div id="app-header" style={{opacity: opa, transform: `translate3d(0, ${y}px, 0)`}}>
						<h1>Here be Apps!</h1>
						<Link className="btn btn-default" type="button" to="/apps/initiative">Initiative App</Link>
						<br />
						<Link className="btn btn-danger" type="button" to="/">Back to home</Link>
					</div>
				}
			</Motion>
		</div>
	);
}
