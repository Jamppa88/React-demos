import page from 'page';
import React from 'react';
import InitHeader from './components/init-header.js';
import InitTable from './components/init-table.js';
import InitTableFooter from './components/init-table-footer.js';
import './init.css';
import './grids2.css';

export default class InitiativeApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			placeholder: null,
			key: 0,
			chars: [],
		};

	}

	handleBack = () => {
		page.show("/apps");
	}
	// Handle adding new entries to tracker
	handleAdd = () => {
		if (document.getElementById('initName').value !== "") {
			// Hardcoded way of getting radio button results
			let adv = null;
			for (let i = 1; i <= 3; i++) {
				if (document.getElementById('initBoxSelect').children[i].children[2].checked) {
					switch(i) {
						case 1:
							adv = "disAdv";
							break;
						case 2:
							adv = "normal";
							break;
						case 3:
							adv = "adv";
							break;
						default:
							adv = "normal";
							break;
					}
				}
			}
			let key = this.state.key;
			const char = {
				key: key,
				name: document.getElementById('initName').value,
				mod: document.getElementById('initMod').value,
				isPC: document.getElementById('initPC_cb').checked,
				adv: adv,
				init: null,
			};
			key++;

			// Take a copy of the state, and push new entry in
			let chars = this.state.chars;
			chars.push(char);
			// Then setState with new chars array
			this.setState({
				chars: chars,
				key: key,
			});
		}

	}

	handleChange = (e) => {
		e.preventDefault();
		let chars = this.state.chars;
		const key = Number(e.target.name);
		const value = e.target.value;
		if (isNaN(value)) {
			chars.forEach(function(char) {
				if (char.key === key) {
					char.adv = value;
				}
			});
		} else {
			chars.forEach(function(char) {
				if (char.key === key) {
					char.mod = value;
				}
			});
		}
		this.setState({chars: chars});
	}

	handleClear = () => {
		this.setState({chars: []});
	}

	handleKill = (e) => {
		// Prevents ghost click
		e.preventDefault();

		const value = Number(e.target.value);
		const chars = this.state.chars.filter(function(x) {
			return x.key !== value;
		});
		this.setState({chars: chars});
	}

	handleRollInitiatives = (e) => {
		e.preventDefault();
		const self = this;
		const chars = this.state.chars.map(function(char) {
			let roll1 = self.rollDice();
			let roll2 = self.rollDice();

			switch (char.adv) {
				case "disAdv":
					char.init = Math.min(roll1, roll2) + Number(char.mod);
					break;
				case "normal":
					char.init = roll1 + Number(char.mod);
					break;
				case "adv":
					char.init = Math.max(roll1, roll2) + Number(char.mod);
					break;
				default:
					char.init = roll1 + Number(char.mod);
					break;
			}
			return char;
		});
		this.setState({chars: chars});
	}

	rollDice = () => {
		return Math.floor(Math.random() * 20 + 1);
	}

	render() {
		const self = this;
		// Sort characters before rendering
		const sortedChars = this.state.chars.sort(function(a,b) {
			if (b.init === a.init) {
				if (b.mod === a.mod) {
						return (self.rollDice() > 10) ? -1 : 1;
				}
				return b.mod - a.mod;
			}
			return b.init - a.init;
		});

		return(
			<div id="init-wrapper">
				<div className="init-container">
					<div id="init-backBtn">
						<button id="initBtn_back" onClick={this.handleBack}>Back to App Menu</button>
					</div>
					<InitHeader
						handleAdd={this.handleAdd}
						handleClear={this.handleClear}
						handleBack={this.handleBack} />

					<InitTable
						handleKill={this.handleKill}
						handleChange={this.handleChange}
						sortedChars={sortedChars} />

					<InitTableFooter
						onClick={this.handleRollInitiatives}
						/>
				</div>
			</div>
		);
	}


}
