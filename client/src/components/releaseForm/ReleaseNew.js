import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ReleaseForm from './ReleaseForm';
import ReleaseFormReview from './ReleaseFormReview';

class ReleaseNew extends Component {
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<ReleaseFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}

		return (
			<ReleaseForm
				onReleaseSubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default reduxForm({ form: 'releaseForm' })(ReleaseNew);
