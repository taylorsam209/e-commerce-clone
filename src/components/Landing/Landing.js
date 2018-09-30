import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./Landing.css";
import { getCurrentUser, getProducts } from "../../ducks/reducer";
import { connect } from "react-redux";
import axios from 'axios';

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
    // axios.get('/api/products').then(resp => console.log(resp.data))
    this.props.getProducts()
  }

  render() {
    console.log('reduct products', this.props.products)
    return (
      <div id="Landing">
        <Nav />
        <div className="landing-content">
          <div className="banner-container" />
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
