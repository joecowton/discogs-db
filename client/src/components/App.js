import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

import Header from './Header';
import Landing from './Landing';
import ReleaseList from './ReleaseList';
import ReleaseNew from './releaseForm/ReleaseNew';
import ReleaseDetail from './ReleaseDetail';
import ArtistDetail from './ArtistDetail';

class App extends Component  {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div >
        <BrowserRouter>
          <div className="container">
            <Header location={this.props.location} />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/releases/all" component={ReleaseList} />
              <Route path="/releases/new" component={ReleaseNew} />
              <Route path="/releases/:id" component={ReleaseDetail} />
              <Route path="/artists/:artist" component={ArtistDetail} />
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
};

export default connect(null, actions, null, { pure: false})(App);
