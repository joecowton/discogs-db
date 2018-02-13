import { FETCH_DATA } from '../actions/types'
import { FETCH_RELEASE } from '../actions/types'
import { FETCH_ARTIST } from '../actions/types'

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case FETCH_DATA:
      return [...state, ...action.payload.releases ]
    case FETCH_ARTIST:
      return [...state, ...action.payload.results ]
    case FETCH_RELEASE:
      return { ...state, [action.payload.data.id]: action.payload.data};
    default:
      return state;
  }
}
