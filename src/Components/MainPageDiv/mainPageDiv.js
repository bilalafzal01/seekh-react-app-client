import React, { Component } from "react";
import "./mainPageDiv.css";
import SideBarLeftDiv from "../SideBars/LeftBar/SideBarLeftDiv";
import SideBarRightDiv from "../SideBars/RightBar/SideBarRightDiv";
import CenterDiv from "../CenterDiv/CenterDiv";
import CenterDivParent from "../CenterDivParent/CenterDivParent";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

class mainPageDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: "default",
      chapterSelected: "Default",
      user: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChapterClick = this.handleChapterClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({
      activePath: e.target.value,
      chapterSelected: "Default",
    });
  }
  handleChapterClick(e) {
    e.preventDefault();
    console.log(`${e.target.value} - ${this.state.activePath}`);
    this.setState({
      chapterSelected: e.target.value,
    });
  }
  async handleLoginClick(userObj) {
    if (!this.state.user) {
      this.setState({ user: userObj });
      await axios.post(
        `http://localhost:5000/users/one?googleId=${userObj.googleId}&displayName=${userObj.name}&givenName=${userObj.givenName}&email=${userObj.email}&imageUrl=${userObj.imageUrl}`
      );
    }
  }
  handleLogoutClick() {
    this.setState({ user: null });
  }
  render() {
    const center =
      this.state.chapterSelected === "Default" ? (
        <CenterDivParent
          handleChapterClick={this.handleChapterClick}
          activePath={this.state.activePath}
        />
      ) : (
        <CenterDiv
          activePath={this.state.activePath}
          chapterSelected={this.state.chapterSelected}
          user={this.state.user}
        />
      );
    return (
      <Router>
        <div className="mainPageDiv">
          <div className="row mainPageDiv-Row-One">
            <div className="mainPageDiv-Header">Left for ads</div>
          </div>
          <div className="row mainPageDiv-Row-Two">
            <div className="mainPageDiv-SideBar-Left">
              <SideBarLeftDiv handleClick={this.handleClick} />
            </div>
            <div className="mainPageDiv-Center">{center}</div>
            <div className="mainPageDiv-SideBar-Right">
              <SideBarRightDiv
                user={this.state.user}
                handleLoginClick={this.handleLoginClick}
                handleLogoutClick={this.handleLogoutClick}
                handleClick={this.handleClick}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default mainPageDiv;
