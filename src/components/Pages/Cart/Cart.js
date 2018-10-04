import React, {Component} from 'react';
import Nav from "../../Nav/Nav";
import {connect} from 'react-redux'

class Cart extends Component{
    constructor() {
        super()

        this.state = {
            input: ''
        }
    }
    render() {
        console.log(this.props.cart)
        return(
            <div>
                <Nav />
                Cart Page
                <section style={{margin:'100px'}}>
                    {this.props.cart.length > 0 ? 
                    <div>

                    {this.props.cart.map((product, index) => {
                        return(
                            <div>
                                <h1>{product.name}</h1>
                                <h2>{product.quantity}</h2>
                                <h3>Price: {product.price * product.quantity}</h3>
                            </div>
                        )
                    })}
                    <h1>Total: {this.props.cart.map(product => product.price * product.quantity).reduce((a,b) => a + b)}</h1>
                    </div>
                    
                    : <div>No items in cart</div>}
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);