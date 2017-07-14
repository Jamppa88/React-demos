import React from 'react';

export default function InitTableItem(props) {
	const key = props.char.key;
	return(
		<div className="init-table-item" style={props.style}>

				<div className="initTable-left-name">{props.char.name}</div>
				<div className="initTable-left-result">{props.char.init}</div>
				<div className="initTable-middle-killSwitch">
					<button className="initTable-killSwitch" value={key} onClick={props.handleKill}>Kill</button>
				</div>


				<div className="initTable-right-mod">

					<input
						type="number"
						name={key}
						defaultValue={props.char.mod}
						min="-10"
						max="20"
						style={{float: "right"}}
						onChange={props.handleChange} />
					<label style={{fontSize: "0.7em", color: "white", float: "right"}}>Mod:</label>
				</div>
				<br/>
				<div className="initTable-right-advantage">
					<select
						name={key}
						defaultValue={props.char.adv}
						style={{float: "right"}}
						onChange={props.handleChange} >
						<option
							name="initDA"
							value="disAdv">Disadvantage</option>
						<option
							name="initN"
							value="normal">Normal</option>
						<option
							name="initA"
							value="adv">Advantage</option>
					</select>
				</div>

		</div>
	);
}

