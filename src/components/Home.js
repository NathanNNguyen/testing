import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login() {
    this.props.authService.login('/');
  }

  async logout() {
    this.props.authService.logout('/');
  }

  render() {
    if (this.props.authState.isPending) return null;

    const mainContent = this.props.authState.isAuthenticated ? (
      <div>
        <p>
          You have entered the staff portal,{' '}
          <Link to="/home">click here</Link>
        </p>
        <button onClick={this.logout}>
          Logout
        </button>
      </div>
    ) : (
        <div>
          <p>
            If you are a staff member, please log in to get to <Link to="/home">Main Site</Link>
          </p>
          <button onClick={this.login}>
            Login
          </button>

        </div>
      );

    return (
      <div>
        <h1>Driftly Staff Portal</h1>
        {mainContent}
      </div>
    );
  }
});

