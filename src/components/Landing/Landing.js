import React, { Component } from 'react';
import Nav from "../Nav/Nav";
import "./Landing.css";
import {getCurrentUser} from "../../ducks/reducer";
import {connect} from 'react-redux';

class Landing extends Component {
    constructor() {
        super()

        this.state = {
            input: ''
        }
    }

    // componentWillMount() {
    //     this.props.getCurrentUser();
    // }
    render() {
        return (
            <div>
                <Nav />
                <div id="Landing">
                    <div className="banner-container">
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {getCurrentUser})(Landing);
