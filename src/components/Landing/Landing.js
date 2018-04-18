import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./Landing.css";
import { getCurrentUser } from "../../ducks/reducer";
import { connect } from "react-redux";

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
  render() {
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

export default connect(null, { getCurrentUser })(Landing);
