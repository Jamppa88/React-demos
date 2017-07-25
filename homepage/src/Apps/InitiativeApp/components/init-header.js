import React from 'react';
import { Button } from 'react-bootstrap'

export default function InitHeader(props) {
	return(
		<div id="init-header" style={{zIndex: 50}}>
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
				disabled={(props.table.length > 0) ? false : true}
				onClick={props.handleRollInitiatives}>Roll Initiatives!</Button>
		</div>
	);
}
