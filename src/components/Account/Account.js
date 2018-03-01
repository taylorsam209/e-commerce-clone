import React, {Component} from 'react';
import Nav from "../Nav/Nav";

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
                Account Page
            </div>
        )
    }
}

export default Account;