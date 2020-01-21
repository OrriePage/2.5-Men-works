import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Results.css";

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
              Your results
            </h1>
            <div>
            <Link to="/Profile">save</Link>
            </div>
            <div>
            <Link to="/EnterPiece">back</Link>
            </div>
          </body>
        </div>
      </>
    );
  }
}

export default Skeleton;
