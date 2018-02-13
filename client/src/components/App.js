import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

import Header from './Header';
import Landing from './Landing';
import ReleaseList from './ReleaseList';
import ReleaseDetail from './ReleaseDetail';

class App extends Component  {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/releases/all" component={ReleaseList} />
              <Route path="/release/:id" component={ReleaseDetail} />
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
};

export default connect(null, actions)(App);
