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
        return <li><a href="/auth/google">Login</a></li>
      default:
        return [
          <li key="3" style={{ margin: '0 10px' }}>
          </li>,
          <li key="2"><a href="/api/logout">
          <span class="navbar-text">
            Logout
          </span></a></li>
      ]
    }
  }

  render() {
    return (
      <div>
          <nav className="navbar navbar-inverse ">
            <div className="container-fluid" >
              <div className="navbar-logo ">
                <Link to={this.props.auth ? '/releases/all' : '/' }
                  className="left brand-logo" style={{}}>
                  <span class="navbar-text center">
                    LIVITY SOUND
                  </span>
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
