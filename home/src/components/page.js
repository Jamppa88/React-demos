import React from 'react';
import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
import './style.css';

export default class Page extends React.Component {
    constructor(props){
        super();

    }

    /*handleOnClick(e){
        const page = this.state.page;
        if (page === "home"){
            this.setState({page: "alt"});
        } else {
            this.setState({page: "home"});
        }
    }*/

    render() {


        return(
            <div id="page">

                <Header />
                <Content />
                <Footer />

            </div>
        );
    }
}
