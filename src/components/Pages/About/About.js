import React, {Component} from 'react';
import Nav from "../../Nav/Nav";

class About extends Component{
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
                About Page
            </div>
        )
    }
}

export default About;