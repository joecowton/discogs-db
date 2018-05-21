// @flow
import { FETCH_USER } from '../actions/types';

export default function(state: Object = {}, action: Object) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}
