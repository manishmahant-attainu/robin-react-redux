import React from 'react';
import googleKeys from '../config/google.json';

class GoogleAuth extends React.Component {
  state = {
    loggedIn: false
  }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: googleKeys.client_id,
          // scope: 'email profile openid https://www.googleapis.com/auth/youtube',
          scope: 'email profile openid',
        })
        .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            // console.dir(this.auth.currentUser.get())
            // this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    this.setState({
      loggedIn: isSignedIn
    });
    if (isSignedIn) {
      console.log(this.auth.currentUser.get().getId());
    } else {
      this.onSignOutClick();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.loggedIn === null) {
      return null;
    } else if (this.state.loggedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
