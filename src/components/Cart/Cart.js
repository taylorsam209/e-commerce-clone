import React, {Component} from 'react';
import Nav from "../Nav/Nav";

class Cart extends Component{
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
                Cart Page
            </div>
        )
    }
}

export default Cart;