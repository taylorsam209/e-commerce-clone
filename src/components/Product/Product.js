import React, {Component} from 'react';

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
                Product Page
            </div>
        )
    }
}

export default Product;