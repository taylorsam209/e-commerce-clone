import React, { Component } from "react";
import Nav from "../..//Nav/Nav";
import "./Landing.css";
import { getProducts, addToCart } from "../../../ducks/reducer";
import { connect } from "react-redux";
import Products from "./Products";
import banner from "../../../assets/banner.jpg";

class Landing extends Component {
  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    console.log("reduct products", this.props);
    return (
      <div id="Landing">
        <Nav />
        <div className="landing-content">
          <img className="banner" alt="banner" src={banner} />
          <Products
            products={this.props.products}
            addToCart={this.props.addToCart}
          />
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
  };
};

const actions = {
  addToCart, 
  getProducts
}

export default connect(mapStateToProps, actions)(Landing);
