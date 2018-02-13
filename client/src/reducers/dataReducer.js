import { FETCH_DATA } from '../actions/types'
import { FETCH_RELEASE } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      return [...state, ...action.payload.releases ]
    case FETCH_RELEASE:
    console.log(action.payload.data);
      return { ...state, [action.payload.data.id]: action.payload.data};
    default:
      return state;
  }
}
