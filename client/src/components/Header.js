import React, { Component } from 'react';
import { BrowserRouter, Router, Link, withRouter  } from 'react-router-dom';
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
            User: {this.props.auth._id}
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
                <div class="dropdown">
                  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                  </button>
                  <ul class="dropdown-menu">
                      <li><Link to="/artists/748051">Peverelist</Link></li>
                      <li><Link to="/artists/1606986">Kowton</Link></li>
                      <li><Link to="/artists/1451990">Asusu</Link></li>
                  </ul>
                </div>
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


export default withRouter(connect(mapStateToProps)(Header));
