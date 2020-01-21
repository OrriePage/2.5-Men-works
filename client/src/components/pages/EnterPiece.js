import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./EnterPiece.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID

class EnterPiece extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      CurNumber: 1,
      b1p1: "",
      b1p2: "",
      b1p3: "",
      b1p4: "",
      b2p1: "",
      b2p2: "",
      b2p3: "",
      b2p4: "",
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  Changeb1p1 = (event) => {this.setState({b1p1: event.target.value,});};
  Changeb1p2 = (event) => {this.setState({b1p2: event.target.value,});};
  Changeb1p3 = (event) => {this.setState({b1p3: event.target.value,});};
  Changeb1p4 = (event) => {this.setState({b1p4: event.target.value,});};
  Changeb2p1 = (event) => {this.setState({b2p1: event.target.value,});};
  Changeb2p2 = (event) => {this.setState({b2p2: event.target.value,});};
  Changeb2p3 = (event) => {this.setState({b2p3: event.target.value,});};
  Changeb2p4 = (event) => {this.setState({b2p4: event.target.value,});};

  render() {
    return (
      <>

        <div class = "u-flex-justifyCenter u-textCenter u-flex-alignCenter">
          <body>
            <h1>
              Piece {this.state.CurNumber} of {this.props.number}
            </h1>
            <p>Boat 1</p>
            <input defaultValue = "Enter Bow Seat" onChange={this.Changeb1p1} />
            <input defaultValue = "Enter 2 Seat" onChange={this.Changeb1p2} />
            <input defaultValue = "Enter 3 Seat" onChange={this.Changeb1p3} />
            <input defaultValue = "Enter Stroke Seat" onChange={this.Changeb1p4} />
            <p>Boat 2</p>
            <input defaultValue = "Enter Bow Seat" onChange={this.Changeb2p1} />
            <input defaultValue = "Enter 2 Seat" onChange={this.Changeb2p2} />
            <input defaultValue = "Enter 3 Seat" onChange={this.Changeb2p3} />
            <input defaultValue = "Enter Stroke Seat" onChange={this.Changeb2p4} />
            
          
            
            <div>
            <Link to="/Results">Results</Link>
            </div>
            <div>
            <Link to="/Step1">Back to setup</Link>
            </div>
            <div>
            <Link to="/Profile">cancel</Link>
            </div>
          </body>
        </div>
      </>
    );
  }
}

export default EnterPiece;

/*<div>
            <Link to="/EnterPiece">Next Piece</Link>
            </div>
            <div>
            <Link to="/EnterPiece">Last Piece</Link>
            </div>*/