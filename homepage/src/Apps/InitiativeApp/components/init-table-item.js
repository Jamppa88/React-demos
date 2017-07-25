import React from 'react';
import { Panel, ListGroupItem, Button, Well, Col, Glyphicon, FormControl, ControlLabel } from 'react-bootstrap';

export default class InitTableItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPanel: false,
		}
	}

	handleOpen = () => {
		this.setState({showPanel: true});
	}

	handleClose = () => {
		this.setState({showPanel: false});
	}
	handleKill = (e) => {
		this.setState({showPanel: false}, this.props.handleKill(e));
		
	}

	render() {
		const char = this.props.char;
		const header = (
			<div>
				<Col xs={2}>
					<Well
						bsSize="small"
						style={{
							margin: "3px 0 0 0",
							width: "40px",
							height: "40px",
							textAlign: "center"
						}}>{char.init}</Well>
				</Col>
				<Col xs={8} style={{textAlign: "center"}}>
					<h3 style={{margin: "10px 0 0 0"}}>{char.name}</h3>
				</Col>
				<Col xs={2}>
					<Button
						bsSize="small"
						style={{marginTop: "5px"}}
						onClick={!this.state.showPanel ? this.handleOpen : this.handleClose}>
						<Glyphicon glyph={!this.state.showPanel ? "chevron-down" : "chevron-up" } />
					</Button>
				</Col>
			</div>
		);


		return(
			<div key={char.key}>
				<ListGroupItem
					style={{padding: 0, margin: 0, zIndex: char.zIndex}}
					bsStyle={this.props.style} >
					{header}

					<Panel
						collapsible
						style={{margin: "44px 0 0 0"}}

						bsStyle={this.props.style}
						expanded={this.state.showPanel}>

						<Col xs={4} style={{padding: 0}}>
							<ControlLabel style={{marginTop: "6px"}}>Mod:</ControlLabel>
							<FormControl
								name={char.key}
								style={{width: "60%", float: "right"}}
								type="number"
								bsSize="small"
								defaultValue={char.mod}
								onChange={this.props.handleChange}
							/>
						</Col>
						<Col xs={6}>
							<FormControl
								bsSize="small"
								componentClass="select"
								name={char.key}
								defaultValue={char.adv}
								onChange={this.props.handleChange}>
								<option
									name="initDA"
								value="disAdv">Disadvantage</option>
								<option
									name="initN"
								value="normal">Normal</option>
								<option
									name="initA"
								value="adv">Advantage</option>
							</FormControl>
						</Col>
						<Col xs={2} style={{padding: 0}}>
							<Button
								bsSize="small"
								bsStyle="danger"
								style={{float: "right"}}
								value={char.key}
								onClick={this.handleKill}>
								Kill
							</Button>
						</Col>

					</Panel>
				</ListGroupItem>
			</div>
		
		);
	}
}
