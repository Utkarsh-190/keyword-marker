import { SET_ENABLED, SET_STATS } from "../actions/marker";

const initialState = {
  enabled: false,
  stats: false,
};

export default function marker(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case SET_ENABLED:
      return {
        ...state,
        enabled: Boolean(data),
      };
    case SET_STATS:
      return {
        ...state,
        stats: Array.isArray(data) ? data.slice() : false,
      };
    default:
      return state;
  }
}
