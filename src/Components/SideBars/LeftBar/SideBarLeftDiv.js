import React, { Component } from "react";
import "./SideBarLeftDiv.css";
import { Link } from "react-router-dom";

class SideBarLeftDiv extends React.Component {
  render() {
    return (
      <div className="SideBarLeftDiv">
        <button
          onClick={this.props.handleClick}
          className="SideBarLeftDiv-Subjects"
          value="Physics"
        >
          Physics
        </button>
        <button
          onClick={this.props.handleClick}
          className="SideBarLeftDiv-Subjects"
          value="Mathematics"
        >
          Mathematics
        </button>
        <button
          onClick={this.props.handleClick}
          className="SideBarLeftDiv-Subjects"
          value="Chemistry"
        >
          Chemistry
        </button>
        <button
          onClick={this.props.handleClick}
          className="SideBarLeftDiv-Subjects"
          value="Biology"
        >
          Biology
        </button>
      </div>
    );
  }
}

export default SideBarLeftDiv;
