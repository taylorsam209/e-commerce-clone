import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./Account.css";

class Account extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }
  render() {
    return (
      <div id="Account">
        <Nav />
        <div className="account-content">
          Account Page
          <p>I know what to do in this time of need</p>
        </div>
      </div>
    );
  }
}

export default Account;
