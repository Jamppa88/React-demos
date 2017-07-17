import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap'

export default function InitHeader(props) {
	return(
		<div id="init-header">
			<Button
				bsStyle="success"
				bsSize="large"
				style={{width: "80%", marginTop: "10px"}}
				onClick={props.handleShowModal}>Add Character</Button>
			<br/>
			<Button
				bsStyle="primary"
				bsSize="large"
				style={{width: "70%", marginTop: "20px"}}
				onClick={props.handleRollInitiatives}>Roll Initiatives!</Button>
		</div>
	);
}
