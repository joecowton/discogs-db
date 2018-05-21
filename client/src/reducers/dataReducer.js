import {
    FETCH_DATA,
    FETCH_RELEASE,
    FETCH_ARTIST,
    SUBMIT_RELEASE,
} from '../actions/types';

export default function(state: Array<Object> = [], action) {
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
