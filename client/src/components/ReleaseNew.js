import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReleaseForm from './ReleaseForm';


class ReleaseNew extends Component {
  render() {
    return (
      <div>
        <ReleaseForm />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
}

export default connect(mapStateToProps)(ReleaseNew);
