import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./Landing.css";
import { getProducts, addToCart } from "../../ducks/reducer";
import { connect } from "react-redux";
import Products from './Products'

class Landing extends Component {

  componentWillMount(){
    this.props.getProducts()
  }

  render() {
    console.log('reduct products', this.props)
    return (
      <div id="Landing">
        <Nav />
        <div className="landing-content">
          <section className="banner-container" />
          <Products products={this.props.products} addToCart={this.props.addToCart} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    user: state.user,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { addToCart, getProducts })(Landing);
