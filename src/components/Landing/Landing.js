import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./Landing.css";
import { getCurrentUser, getProducts } from "../../ducks/reducer";
import { connect } from "react-redux";
import Products from './Products'

class Landing extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  // componentWillMount() {
  //     this.props.getCurrentUser();
  // }

  componentWillMount(){
    this.props.getProducts()
  }

  renderProducts() {
    const {products} = this.props;
    return products.map((product, index) => {
      return (
        <div key={index}>
          <h1>{product.name}</h1>
          <h2>{product.color}</h2>
          <h3>{product.price}</h3>
        </div>
      )
    })
  }

  render() {
    console.log('reduct products', this.props.products)
    return (
      <div id="Landing">
        <Nav />
        <div className="landing-content">
          <div className="banner-container" />
          <Products products={this.props.products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { getCurrentUser, getProducts })(Landing);
