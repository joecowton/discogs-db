// @flow
import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

type Props = {
    onCancel: string,
    formValues: any,
    submitRelease: Function,
    history: any,
};

const ReleaseReview = ({
    onCancel,
    formValues,
    submitRelease,
    history,
}: Props) => {
    const reviewFields = _.map(formFields, ({ name, label }) => (
        <div key={name}>
            <label>{label}</label>
            <div>{formValues[name]}</div>
        </div>
    ));

    return (
        <div>
            <h5>please confirm entry</h5>
            {reviewFields}
            <button
                className="black darken-3 white-text btn-flat"
                onClick={onCancel}
            >
                Back
            </button>
            <button
                onClick={() => submitRelease(formValues, history)}
                className="black btn-flat white-text right"
            >
                Submit New Release
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.releaseForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(ReleaseReview));
