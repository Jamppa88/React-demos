import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Well, Popover, Overlay } from 'react-bootstrap';

export default class InitTableFooter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPop: false,
		}
	}

	handleOpenPop = () => {
		
	}

	render() {
		const popoverBot = (
			<Popover id="popover-positioned-bottom">
				Please enter a name!
				<Button>Cancel</Button>
				<Button>Clear Table</Button>
			</Popover>
		);
		return(
			<div id="init-footer">
				<Well
					bsSize="small"
					style={{
						width: "60%",
						float: "none",
						margin: "auto"
					}}>
					<Button
						ref="target"
						bsStyle="danger"
						style={{width: "90%"}}
						disabled={(props.table.length > 0) ? false : true}
						onClick={props.onClick}>Clear table</Button>
				</Well>

				<Overlay
					show={this.state.showPop}
					container={this}
					placement="bottom"
					onHide={handleClearPopClose}
					target={() => ReactDOM.findDOMNode(this.refs.target)}
				>
					{popoverBot}
				</Overlay>
			</div>
		);
	}
}
