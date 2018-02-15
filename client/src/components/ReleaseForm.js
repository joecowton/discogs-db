import _ from 'lodash'
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import ReleaseField from './ReleaseField';

const FIELDS = [
  { label: 'Title', name: 'title' },
  { label: 'Artist', name: 'artist' },
  { label: 'Image Link', name: 'thumb' },
  { label: 'Cat Number', name: 'catno' },
  { label: 'Format', name: 'format' },
  { label: 'Discogs Link', name: 'resource_url' },
  { label: 'ID', name: 'id' }
]

class ReleaseForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field component={ReleaseField} type="text" label={label} name={name} />
      )
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/releases/all" className="black btn-flat white-text">
            Exit
          </Link>
          <button type='submit' className="black btn-flat right white-text">
            Next
          </button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'ReleaseForm'
})(ReleaseForm);
