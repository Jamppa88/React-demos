import React from 'react';

export default function InitTableFooter(props) {
	return(
		<div id="init-footer">
				<button onClick={props.onClick}>Roll for Initiative!</button>
		</div>
	);
}
