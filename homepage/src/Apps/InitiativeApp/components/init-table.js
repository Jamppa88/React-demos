import React from 'react';
import InitTableItem from './init-table-item.js';

export default function InitTable(props) {
	return(
		<div id="initTable">
				<ul id="initList">
					{props.sortedChars.map(function(char) {
						const style = char.isPC ? {backgroundColor: "forestgreen"} : {backgroundColor: "darkred"};
						return (
							<li key={char.key}>
								<InitTableItem
									char={char}
									handleKill={props.handleKill}
									handleChange={props.handleChange}
									style={style} />
							</li>);
					}
					)}
				</ul>
		</div>
	);
}


