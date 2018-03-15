import React, { Component } from 'react';
import "./Nav.css";
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserCircle, faSignOutAlt } from '@fortawesome/fontawesome-free-solid'
import { connect } from "react-redux";
import {getCurrentUser} from "../../ducks/reducer";

class Nav extends Component {
    constructor() {
        super()

        this.state = {
            user: false
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    componentWillMount() {
        this.props.getCurrentUser()
    }

    handleLogin() {
        console.log("handleLogin", this.props.user)
        if (!this.props.user) {
            return (
                <ul>
                    <Link to="/cart" className="link"><li><FontAwesomeIcon icon={faShoppingCart} /> Cart</li></Link>
                    <a className="link" href={process.env.REACT_APP_LOGIN}><li><FontAwesomeIcon icon={faUserCircle} /> Account</li></a>
                    <Link to="/about" className="link"><li>About</li></Link>
                </ul>
            )
        } else
            return (
                <ul>
                    <a href={process.env.REACT_APP_LOGOUT} className="link"><li><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li></a>
                    <Link to="/cart" className="link"><li><FontAwesomeIcon icon={faShoppingCart} /> Cart</li></Link>
                    <Link to="/account" className="link" ><li><FontAwesomeIcon icon={faUserCircle} /> Account</li></Link>
                    <Link to="/about" className="link"><li>About</li></Link>
                </ul>
            )
    }

    render() {
        return (
            <div id="Nav">
                <div className="top-bar">FREE SHIPPING ON ALL ORDERS</div>
                <div className="nav-container">
                    <div className="nav-container-left"></div>
                    <Link to="/" className="link"><div className="header-title">MVMT</div></Link>
                    <div className="nav-container-right">
                        {this.handleLogin()}
                    </div>
                </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getCurrentUser})(Nav);