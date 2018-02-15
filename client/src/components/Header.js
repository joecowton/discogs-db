import React, { Component } from 'react';
import { BrowserRouter, Router, Link  } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './tools/Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login</a></li>
      default:
        return [
          <div>
          <li><Link to={this.props.auth ? '/releases/new' : '/' }>Add New</Link></li>
          <li key="3" style={{ margin: '0 10px' }}>
          </li>
          <li key="2"><a href="/api/logout">Logout</a></li>
        </div>
      ]
    }
  }

  render() {
    return (
      <div>
          <nav className="navbar navbar-inverse ">
            <div className="container-fluid" >
              <div className="navbar-logo">
                <Link to={this.props.auth ? '/releases/all' : '/' }
                  className="left brand-logo" style={{}}>
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
