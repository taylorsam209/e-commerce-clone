import React, {Component} from 'react';
import Nav from "../Nav/Nav";
import "./Account.css";

class Account extends Component{
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
                <div id="Account">
                Account Page
                </div>
            </div>
        )
    }
}

export default Account;