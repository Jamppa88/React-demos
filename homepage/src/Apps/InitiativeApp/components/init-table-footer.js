import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class InitTableFooter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
		}
	}

	handleOpenModal = (e) => {
		e.preventDefault();
		this.setState({showModal: true});
	}

	handleClose = () => {
		this.setState({showModal: false});
	}
	handleClear = (e) => {
		e.preventDefault();
		this.setState({showModal: false}, this.props.handleClear)
	}

	render() {

		return(
			<div id="init-footer">
				<Button
					ref="target"
					bsStyle="danger"
					style={{width: "90%", margin: "10px 0 50px 0"}}
					disabled={(this.props.table.length > 0) ? false : true}
					onClick={this.handleOpenModal}>Clear table</Button>

				<Modal show={this.state.showModal} onHide={this.handleClose}>
					<Modal.Body style={{textAlign: "center"}}>
						Are you sure you want to clear table?
					</Modal.Body>
					<Modal.Footer style={{textAlign: "center"}}>
						<Button onClick={this.handleClose}>Cancel</Button>
						<Button bsStyle="danger" onClick={this.handleClear}>Clear table</Button>
					</Modal.Footer>
				</Modal>

			</div>
		);
	}
}
