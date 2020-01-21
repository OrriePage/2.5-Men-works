import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import EnterPiece from "./pages/EnterPiece.js";
import History from "./pages/History.js";
import Step1 from "./pages/Step1.js";
import Results from "./pages/Results.js";
import NavBar from "./modules/NavBar.js";


import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    return (
      <>
      <NavBar
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          userId={this.state.userId}
        />
        <div className="App-container">
        <Router>
          <Profile
            path="/"
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <History path="/History/"
          userId={this.state.userId}/>
          <Step1 path="/Step1/"
          userId={this.state.userId}/>
          <EnterPiece path="/EnterPiece/"
          userId={this.state.userId}/>
          <Results path="/Results/"
          userId={this.state.userId}/>
          <Login path="/Login/"
          userId={this.state.userId}/>
          <NotFound default />

        </Router>
        </div>
      </>
    );
  }
}

export default App;
