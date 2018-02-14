import React, { Component } from 'react';
import { BrowserRouter, Router, Link  } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>
      default:
        return [
          <li key="3" style={{ margin: '0 10px' }}>
            Logged in as: {this.props.auth.name}
          </li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
      ]
    }
  }

  render() {
    return (
      <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid" >
              <div className="nav-wrapper">
                <Link to={this.props.auth ? '/releases/all' : '/' }
                  className="left brand-logo"
                  style={{ margin: '0 10px'}}>
                  LIVITY SOUND
                </Link>
                <ul className="right">
                  {this.renderContent()}
                </ul>
              </div>
            </div>
          </nav>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}


export default connect(mapStateToProps)(Header);
