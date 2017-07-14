import React from 'react';

export default function InitHeader(props) {
	return(
		<div id="init-addBox">
			<input
				id="initName"
				type="text"
				name="name"
				placeholder="Name" />
			<input
				id="initMod"
				type="number"
				name="mod"
				min="-10"
				max="20"
				defaultValue="0" />
			<label id="lbMod">Mod</label>
			<br />
			<div id="initBoxSelect">
				<div className="selectBox">
					<label>PC:</label><br/>
					<input
						id="initPC_cb"
						type="checkbox"
						name="PC"/>
				</div>
				<div className="selectBox">
					<label>DisAdv:</label><br/>
					<input
						className="initAdv_radio"
						type="radio"
						name="adv" />
				</div>
				<div className="selectBox">
					<label>Normal:</label><br/>
					<input
						className="initAdv_radio"
						type="radio"
						name="adv"
						defaultChecked="checked"
						/>
				</div>
				<div className="selectBox">
					<label>Adv:</label><br/>
					<input
						className="initAdv_radio"
						type="radio"
						name="adv" />
				</div>
			</div>
			<div style={{textAlign: "center"}}>
				<button id="initClear" onClick={props.handleClear}>Clear board</button>
				<button id="initAdd" onClick={props.handleAdd}>Add</button>
			</div>
		</div>
	);
}

