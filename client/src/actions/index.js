// @flow
import axios from 'axios';
import {
    FETCH_USER,
    FETCH_DATA,
    FETCH_RELEASE,
    FETCH_ARTIST,
    SUBMIT_RELEASE,
} from './types';

const myKey = 'qeIeIQJgvnggcqHasaVV';
const mySecret = 'OndCkhIDXkQruNLkDZLYjrPyaeQbYhlc';

const ROOT_URL = 'https://api.discogs.com';

export const fetchUser = () => async (dispatch: Function) => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token: String) => async (dispatch: Function) => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchData = () => async (dispatch: Function) => {
    const res = await axios.get('/api/releases/');

    dispatch({ type: FETCH_DATA, payload: res.data });
};

export const fetchArtist = (artist: Object) => async (dispatch: Function) => {
    const res = await axios.get(`/api/releases/${artist.searchName}`);
    dispatch({ type: FETCH_ARTIST, payload: res.data });
};

export const fetchRelease = (id: String) => async (dispatch: Function) => {
    const res = await axios.get(
        `${ROOT_URL}/releases/${id.toString()}?key=${myKey}&secret=${mySecret}`
    );
    dispatch({ type: FETCH_RELEASE, payload: res });
};

export const submitRelease = (values: any, history: any) => async (
    dispatch: Function
) => {
    const res = await axios.post('/api/releases', values);

    history.push('/releases/all');
    dispatch({ type: SUBMIT_RELEASE, payload: res });
};
