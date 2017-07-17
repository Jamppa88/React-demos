import page from 'page';
import React from 'react';
import './apps.css';
import { Motion, spring } from 'react-motion';

export default class AppPage extends React.Component {

	handleBack() {
		page.show("/home");
	}

	handleClick(e) {
		console.log(e.target.value);
		switch(e.target.value) {
			case 'initiative':
				page.show("/apps/initiative");
				break;
			case 'test':
				page.show("/apps/test");
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<div id="app-wrapper">
				<Motion defaultStyle={{opa: 0, y: 100}} style={{opa: spring(1, {stiffness: 10, damping: 9}), y: spring(0, {stiffness: 39, damping: 9})}}>
					{({opa, y}) =>
						<div id="app-header" style={{opacity: opa, transform: `translate3d(0, ${y}px, 0)`}}>
							<h1>Here be Apps!</h1>
							<button className="appBtn" onClick={this.handleClick} value="initiative">Initiative App</button>
							<br />
							<button className="appBtn" onClick={this.handleClick} value="test">Test Env</button>
							<br />
							<button className="appBtn_back" onClick={this.handleBack}>Back to home</button>
						</div>
				}
				</Motion>
			</div>
		);
	}
}
