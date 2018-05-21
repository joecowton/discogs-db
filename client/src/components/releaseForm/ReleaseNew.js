// @flow
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ReleaseForm from './ReleaseForm';
import ReleaseFormReview from './ReleaseFormReview';

type State = {
    showFormReview: boolean,
};

type Props = {};

class ReleaseNew extends Component<Props, State> {
    state = { showFormReview: false };

    render() {
        return (
            <div>
                {this.state.showFormReview ? (
                    <ReleaseFormReview
                        onCancel={() =>
                            this.setState({ showFormReview: false })
                        }
                    />
                ) : (
                    <ReleaseForm
                        onReleaseSubmit={() =>
                            this.setState({ showFormReview: true })
                        }
                    />
                )};
            </div>
        );
    }
}

export default reduxForm({ form: 'releaseForm' })(ReleaseNew);
