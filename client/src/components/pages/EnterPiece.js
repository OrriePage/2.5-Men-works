import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./EnterPiece.css";

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
              Select switches
            </h1>
            <h3>Boat 1</h3>
            <p>person1</p>
            <p>person2</p>
            <p>person3</p>
            <p>person4</p>
            <h3>Boat 2</h3>
            <p>person1</p>
            <p>person2</p>
            <p>person3</p>
            <p>person4</p>
            <div>
            <Link to="/Results">Results</Link>
            </div>
            <div>
            <Link to="/Step1">Back to setup</Link>
            </div>
            <div>
            <Link to="/EnterPiece">next</Link>
            </div>
            <div>
            <Link to="/EnterPiece">back</Link>
            </div>
            <div>
            <Link to="/">cancel</Link>
            </div>
          </body>
        </div>
      </>
    );
  }
}

export default Skeleton;
