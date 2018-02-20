import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_DATA } from './types';
import { FETCH_RELEASE } from './types';
import { FETCH_ARTIST } from './types';
import { SUBMIT_RELEASE } from './types';

const myKey = 'qeIeIQJgvnggcqHasaVV';
const mySecret = 'OndCkhIDXkQruNLkDZLYjrPyaeQbYhlc';

const ROOT_URL = 'https://api.discogs.com';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
	const res = await axios.post('/api/stripe', token);

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchData = () => async dispatch => {
	const res = await axios.get('/api/releases/');

	dispatch({ type: FETCH_DATA, payload: res.data });
};

export const fetchArtist = artist => async dispatch => {
	const res = await axios.get(`/api/releases/${artist}`);

	dispatch({ type: FETCH_ARTIST, payload: res.data });
};

export const fetchRelease = id => async dispatch => {
	const res = await axios.get(
		`${ROOT_URL}/releases/${id}?key=${myKey}&secret=${mySecret}`
	);

	dispatch({ type: FETCH_RELEASE, payload: res });
};

export const submitRelease = (values, history) => async dispatch => {
	const res = await axios.post('/api/releases', values);

	history.push('/releases/all');
	dispatch({ type: SUBMIT_RELEASE, payload: res });
};
