import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields'

const ReleaseReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, ({ name, label}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  })

  return (
    <div>
      <h5>please confirm entry</h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return { formValues: state.form.releaseForm.values };
}

export default connect(mapStateToProps)(ReleaseReview);
