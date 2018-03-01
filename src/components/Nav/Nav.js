import React, { Component } from 'react';
import "./Nav.css";
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faShoppingCart, faUserCircle } from '@fortawesome/fontawesome-free-solid'

class Nav extends Component {
    constructor() {
        super()

        this.state = {
            yoyo: ""
        }
    }
    render() {
        return (
            <div id="Nav">
                <div className="top-bar">FREE SHIPPING ON ALL ORDERS</div>
                <div className="nav-container">
                    <div className="nav-container-left"></div>
                    <Link to="/" className="link">
                        <div className="header-title">MVMT</div>
                    </Link>
                    <div className="nav-container-right">
                        <ul>
                            <Link to="/cart" className="link"><li><FontAwesomeIcon icon={faShoppingCart} /> Cart</li></Link>
                            <Link to="/account" className="link"><li><FontAwesomeIcon icon={faUserCircle} /> Account</li></Link>
                            <Link to="/about" className="link"><li>About</li></Link>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

export default Nav;