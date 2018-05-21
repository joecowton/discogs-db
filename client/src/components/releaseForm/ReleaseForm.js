import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import ReleaseField from './ReleaseField';
import formFields from './formFields';
import validateLinks from '../../utils/validateLinks';

type Props = {
    handleSubmit: Function,
    onReleaseSubmit: Function,
};

class ReleaseForm extends Component<Props> {
    static renderFields() {
        return _.map(formFields, ({ label, name }) => (
            <Field
                key={name}
                component={ReleaseField}
                type="text"
                label={label}
                name={name}
            />
        ));
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(
                        this.props.onReleaseSubmit
                    )}
                >
                    {this.renderFields()}
                    <Link
                        to="/releases/all"
                        className="black btn-flat white-text"
                    >
                        Exit
                    </Link>
                    <button
                        type="submit"
                        className="black btn-flat right white-text"
                    >
                        Next
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.videos = validateLinks(values.videos || '');

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'releaseForm',
    destroyOnUnmount: false,
})(ReleaseForm);
