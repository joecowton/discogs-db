import axios from 'axios';
import { FETCH_USER } from './types'
import { FETCH_DATA } from './types'
import { FETCH_RELEASE } from './types'
const myKey ='qeIeIQJgvnggcqHasaVV';
const mySecret ='OndCkhIDXkQruNLkDZLYjrPyaeQbYhlc';
const ROOT_URL = 'https://api.discogs.com';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data })
};

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token)

  dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchData = () => async dispatch => {
  const res =  await axios.get(`${ROOT_URL}/artists/748051/releases?key=${myKey}&secret=${mySecret}`)

  dispatch({ type: FETCH_DATA, payload: res.data })
}

export const fetchRelease = (id) => async dispatch => {
  const res = await axios.get(`${ROOT_URL}/masters/${id}?key=${myKey}&secret=${mySecret}`);

  dispatch({ type: FETCH_RELEASE, payload: res })
}
