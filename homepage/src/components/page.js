import React from 'react';
import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';
import Home from '../views/home-view.js';
import Alt from '../views/alternate-view.js';
import Sidebar from './sidebar.js';
import '../style.css';

import { Motion, presets, spring } from 'react-motion';

export default class Page extends React.Component {
	constructor(props){
	 super(props);
		this.state = {
			headline: "Jani Kerttula",
			view: <Home />,
			sbVisible: true,
		};
	}

	componentWillMount() {
		console.log(document.body);
		document.body.onscroll = this.handleScroll;
		console.log(document.body.onscroll);
	}

	conmponentWillUnmount() {
		document.body.onscroll = null;
	}

	handleOnClick(i){
		if (this.state.headline !== i.target.value) {
			this.setState({headline: i.target.value});

		}
		this.getView(i.target.value);
	}

	handleScroll() {
		const body = document.body;
		const header = document.getElementById("header");
		if (body.scrollTop === body.offsetTop) {
			header.style.padding = "10px";
			header.style.backgroundColor = "#D7CEC7";
		}
		else {
			header.style.padding = "4px";
			header.style.backgroundColor = "#814015";
		}
	}

	getView(value) {
		switch (value){
			case 'Jani Kerttula':
				this.setState({view: <Home />, sbVisible: true});
			  break;
		  default:
			  this.setState({view: <Alt />, sbVisible: false});
				break;
		}
	}

	render() {
		return(
			<div id="page" onScroll={this.handleScroll}>
				<Header headline={this.state.headline} onClick={this.handleOnClick.bind(this)}/>
				<Content>
					{this.state.view}
					<Motion defaultStyle={{x: 310}} style={{x: (this.state.sbVisible ? spring(0) : spring(310)), config: presets.stiff}}>
					{({x}) =>
						<Sidebar style={{transform: `translate3d(${x}px, 0px, 0px)`}} />
					}
				</Motion>
				</Content>
				<Footer />
			</div>
		);
	}

}
