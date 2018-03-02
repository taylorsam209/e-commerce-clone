import React, {Component} from 'react';
import Nav from "../Nav/Nav";
import "./Landing.css"

class Landing extends Component{
    constructor() {
        super()

        this.state = {
            input: ''
        }
    }
    render() {
        return(
            <div>
                <Nav />
                <div id="Landing">
                <div className="banner-container">
                Landing
                </div>
                </div>
            </div>
        )
    }
}

export default Landing;
