// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import ReleaseList from './ReleaseList';
import ReleaseNew from './releaseForm/ReleaseNew';
import ReleaseDetail from './ReleaseDetail';

type Props = {
    fetchUser: Function,
    location: string,
};

class App extends Component<Props> {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Header location={this.props.location} />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route
                                path="/releases/all"
                                component={ReleaseList}
                            />
                            <Route
                                path="/releases/new"
                                component={ReleaseNew}
                            />
                            <Route
                                path="/releases/:id"
                                component={ReleaseDetail}
                            />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
