import React, {Component} from 'react';
import Nav from "../Nav/Nav";

class Product extends Component{
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
                Product Page
            </div>
        )
    }
}

export default Product;