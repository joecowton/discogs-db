import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  auth: authReducer,
  data: dataReducer,
  form: reduxForm
})
