import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./History.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>

        <div class = "u-flex-justifyCenter u-textCenter u-flex-alignCenter">
          <body>
            <h1>
              History!
            </h1>
            <h4>as you have probably guessed, this does not work yet :)</h4>
            
            <Link to="/Profile">back to profile</Link>
          </body>
        </div>
      </>
    );
  }
}

export default Skeleton;
