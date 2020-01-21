import React, { Component } from "react";
import { Link } from "@reach/router";
import { post } from "../../utilities";

import "../../utilities.css";
import "./Profile.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

class Profile extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };






  render() {
    return (
      <>
       
        <div class = "u-flex-justifyCenter u-textCenter u-flex-alignCenter">
        <body>
          <h1>Profile</h1>
          <div>
        <Link to="/History/" >go to History</Link>
        </div>
        <div>
        <Link to="/Step1/" >add a new seatrace</Link>
        </div>

          </body>
        </div>
      </>
    );
  }
}

export default Profile;

//<Link to="/page2/">CLick me to see a hippo!</Link>