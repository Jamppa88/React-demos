import page from 'page';
import React from 'react';
import InitHeader from './components/init-header.js';
import InitTable from './components/init-table.js';
import InitTableFooter from './components/init-table-footer.js';
import InitAddModal from './components/init-modal.js';

import { Button, Modal } from 'react-bootstrap';
// import './init.css';
import './grids2.css';

export default class InitiativeApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showError: false,
			chars: [],
		};

	}

	handleBack = () => {
		page.show("/apps");
	}

	handleSubmit = (data) => {
		if (this.state.chars.length < 30) {
			let chars = this.state.chars;
			chars.push(data);
			this.setState({chars: chars, showModal: false});
		} else {
			this.setState({showError: true, showModal: false});
		}
	}

	handleErrorClose = () => {
		this.setState({showError: false});
	}

	handleShowModal = (e) => {
		// Prevents ghost click
		if (e !== undefined){
			e.preventDefault();
		}
		this.setState({showModal: !this.state.showModal});
	}

	handleChange = (e) => {
		// Prevents ghost click
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
			if (a.init === null || b.init === null){
				return 0;
			}
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
				<InitAddModal
					showModal={this.state.showModal}
					handleSubmit={this.handleSubmit}
					handleShowModal={this.handleShowModal}/>
				<Modal show={this.state.showError} onHide={this.handleErrorClose}>
					<Modal.Title style={{textAlign: "center"}}>Error! Too many characters!</Modal.Title>
					<Modal.Body>This app has a maximum of 30 entries in order to avoid overloading.
						<br/>
						Please remove old entries in order to add new ones.
					</Modal.Body>
					<Modal.Footer style={{textAlign: "center"}}>
						<Button onClick={this.handleErrorClose}>Close</Button>
					</Modal.Footer>
				</Modal>
				<div className="init-container">

					<div id="init-backBtn">
						<Button
							bsStyle="warning"
							style={{
									width: "50%",
									height: "auto",
									whiteSpace: "inherit",
									minWidth: "76px",
							}}
							onClick={this.handleBack}>Back to App Menu</Button>
					</div>
					<InitHeader
						handleShowModal={this.handleShowModal}
						handleRollInitiatives={this.handleRollInitiatives}
						table={this.state.chars} />

					<InitTable
						handleKill={this.handleKill}
						handleChange={this.handleChange}
						sortedChars={sortedChars} />

					<InitTableFooter
						handleClear={this.handleClear}
						table={this.state.chars}
					/>


				</div>
			</div>
		);
	}


}
