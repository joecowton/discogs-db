import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login</a></li>
      default:
        return [
          <div key="3">
            <li key="1"><Link to={this.props.auth ? '/releases/new' : '/' }>Add New</Link></li>
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
                <Link to={this.props.auth ? '/releases/all' : '/' }>
                    Main
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
