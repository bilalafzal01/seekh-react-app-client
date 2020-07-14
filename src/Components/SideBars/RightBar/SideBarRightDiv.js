import React, { Component } from "react";
import "./SideBarRightDiv.css";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";

class SideBarRightDiv extends Component {
  render() {
    const responseGoogle = (response) => {
      this.props.handleLoginClick(response.profileObj);
    };
    const logout = () => {
      this.props.handleLogoutClick();
      console.log(`logged out the user`);
    };
    const googleButton = this.props.user ? (
      <GoogleLogout
        clientId="21187264638-1cio36i6k1ol0sugk9uh6qc45g4m33tv.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="custom-Google-logout-Button"
          >
            Logout
          </button>
        )}
      />
    ) : (
      <GoogleLogin
        clientId="21187264638-1cio36i6k1ol0sugk9uh6qc45g4m33tv.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="custom-Google-Button"
          >
            Login with Google
          </button>
        )}
      />
    );
    const userInfo = this.props.user ? (
      <div className="SideBarRightDiv-User">
        <img className="User-Picture" src={this.props.user.imageUrl} />
        <div className="User-Name"> {this.props.user.givenName}</div>
      </div>
    ) : (
      <div className="SideBarRightDiv-User">
        <div className="User-Picture"> Avatar </div>
        <div className="User-Name"> User </div>
      </div>
    );
    return (
      <div className="SideBarRightDiv">
        {userInfo}
        {googleButton}
        <div className="SideBarRightDiv-Links">
          <button
            onClick={this.props.handleClick}
            className="Links"
            value="default"
          >
            Practice
          </button>
          <button className="Links">Profile</button>
          <button className="Links">Bookmarks</button>
          <button className="Links">Help</button>
          <button className="Links">Statistics</button>
        </div>
      </div>
    );
  }
}

export default SideBarRightDiv;
