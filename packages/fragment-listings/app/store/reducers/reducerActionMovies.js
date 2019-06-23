import { FETCH_ACTION_MOVIES } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ACTION_MOVIES:
      const data = action.payload.data.results;
      return { ...state, data }
    default:
      return state;
  }
}