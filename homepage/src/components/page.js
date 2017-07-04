import React from 'react';
import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';
import Home from '../views/home-view.js';
import Alt from '../views/alternate-view.js';
import Sidebar from './sidebar.js';
import '../style.css';



export default class Page extends React.Component {
	constructor(props){
	 super(props);
		this.state = {
			headline: "Jani Kerttula",
			view: <Home />,
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
			header.style.opacity = 0.7;
		}
		else {
			header.style.padding = "4px";
			header.style.opacity = 1;
		}
	}

	getView(value) {
		switch (value){
			case 'Jani Kerttula':
				this.setState({view: <Home />});
			  break;
		  default:
			  this.setState({view: <Alt />});
				break;
		}
	}

	render() {
		return(
			<div id="page" onScroll={this.handleScroll}>
				<Header headline={this.state.headline} onClick={this.handleOnClick.bind(this)}/>
				<Content>
					{this.state.view}
					<Sidebar />
				</Content>
				<Footer />
			</div>
		);
	}

}
