import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReleaseForm from './ReleaseForm';
import ReleaseFormReview from './ReleaseFormReview'


class ReleaseNew extends Component {
  state = { showFormReview: false}

  renderContent() {
    if (this.state.showFormReview){
      return <ReleaseFormReview />
    }

    return (
      <ReleaseForm
        onReleaseSubmit={() => this.setState({ showFormReview: true })}
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
}

export default connect(mapStateToProps)(ReleaseNew);
