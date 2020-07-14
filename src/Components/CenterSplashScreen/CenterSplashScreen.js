import React, { Component } from "react";
import "./CenterSplashScreen.css";

export class CenterSplashScreen extends Component {
  render() {
    return (
      <div className="CenterSplashScreen">
        <div className="SplashScreen-welcome">Welcome to Seekh!</div>
        <div className="SplashScreen-LogoDiv">
          <img src="logo.png" alt="" className="SplashScreen-logo" />
        </div>
      </div>
    );
  }
}

export default CenterSplashScreen;
