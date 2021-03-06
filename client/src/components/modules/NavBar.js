import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./NavBar.css";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "40712249684-cgkcl9f96k3743aqce92t2senm2gm86n.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="nav">
          <div class = "navtext row">
          <div className = "row logo"> Logo</div>
          

        </div>
        </nav>
    );
  }
}

export default NavBar;


//<div className = "row login">
//{this.props.userId ? (
//  <GoogleLogout
//    clientId={GOOGLE_CLIENT_ID}
//    buttonText="Logout"
//    onLogoutSuccess={this.props.handleLogout}
//    onFailure={(err) => console.log(err)}
//  />
//) : (
//  <GoogleLogin
//    clientId={GOOGLE_CLIENT_ID}
//    buttonText="Login"
//    onSuccess={this.props.handleLogin}
//    onFailure={(err) => console.log(err)}
//  />
//)}
//</div>