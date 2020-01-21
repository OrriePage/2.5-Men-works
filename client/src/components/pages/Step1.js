import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Step1.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID

class Step1 extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      number: 2,
      next: <p>...</p>,
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  

  ChangeNumber = (event) => {
    this.setState({
      number: parseInt(event.target.value,10),
    });
    if (typeof(parseInt(event.target.value,10)) == 'number') {
      this.setState({entered: true, next: <Link to="/EnterPiece" number={this.state.number}>Next</Link>})
    }
    else {this.setState({next: <p>Please enter a valid number</p>})}
    
  };

  

  // called when the user hits "Submit" for a new post
 
  



  render() {
    const next = this.state.next

    

    return (
      <>

        <div class = "u-flex-justifyCenter u-textCenter u-flex-alignCenter">
          <body>
            

            <h1>How many pieces did you do?</h1>
            <input defaultValue = "" onChange={this.ChangeNumber} />
            <h3>
            {next}
            </h3>
            <div>
            <Link to="/Profile">Cancel</Link>
            </div>
        
          </body>
        </div>
      </>
    );
  }
}

export default Step1;
