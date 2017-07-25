import React from 'react';
import InitTableItem from './init-table-item.js';
import { ListGroup, Jumbotron } from 'react-bootstrap';

export default function InitTable(props) {
	return(
			<Jumbotron
				id="initTable"
				style={{margin: "5px 0 0 0", padding: "5px", zIndex: 0}}>
				<ListGroup style={{margin: 0}}>
					{props.sortedChars.map(function(char) {
						const style = char.isPC ? "success" : "warning" ;
						return (
							<InitTableItem
								key={char.key}
								char={char}
								handleKill={props.handleKill}
								handleChange={props.handleChange}
								style={style} />
						);
					})}
				</ListGroup>
			</Jumbotron>
	);
}
// <Well id="initTable" style={{marginTop: "10px"}}></Well>
