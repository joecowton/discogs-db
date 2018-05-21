// @flow
import {
    FETCH_DATA,
    FETCH_RELEASE,
    FETCH_ARTIST,
    SUBMIT_RELEASE,
} from '../actions/types';
import type { DataDefinition } from '../components/ArtistDetail';

type State = {};

type PayloadDefinition = {
    data?: Array<DataDefinition>,
};

type ActionDefinition = {
    payload?: Array<PayloadDefinition>,
    type: String,
};

export default function(state: Array<State> = [], action: ActionDefinition) {
    switch (action.type) {
        case FETCH_DATA:
            return [...state, ...action.payload];
        case FETCH_ARTIST:
            return action.payload;
        case SUBMIT_RELEASE:
            return action.payload;
        case FETCH_RELEASE:
            return { ...state, [action.payload.data.id]: action.payload.data };
        default:
            return state;
    }
}
