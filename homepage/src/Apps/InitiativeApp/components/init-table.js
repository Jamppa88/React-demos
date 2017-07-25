import React from 'react';
import InitTableItem from './init-table-item.js';
import { ListGroup, Jumbotron } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';

export default function InitTable(props) {
	const items = props.sortedChars.map((char) => {
		let style = char.isPC ? "success" : "warning" ;
			return (
				<InitTableItem
					key={char.key}
					char={char}
					handleKill={props.handleKill}
					handleChange={props.handleChange}
					style={style} />
			);
	});
	return(
			<Jumbotron
				id="initTable"
				style={{margin: "5px 0 0 0", padding: "5px", zIndex: 0}}>
				<ListGroup style={{margin: 0}}>
					<CSSTransitionGroup 
						transitionName="tableAnim"
						transitionEnterTimeout={800}
						transitionLeaveTimeout={800} >
						{items}
					</CSSTransitionGroup>
				</ListGroup>
			</Jumbotron>
	);
}
// <Well id="initTable" style={{marginTop: "10px"}}></Well>
