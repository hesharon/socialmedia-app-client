import {
  SET_SHOUTS,
  LIKE_SHOUT,
  UNLIKE_SHOUT,
  LOADING_DATA,
  DELETE_SHOUT,
  POST_SHOUT,
  SET_SHOUT,
  SUBMIT_COMMENT,
} from "../types";

const initialState = {
  shouts: [],
  shout: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_SHOUTS:
      return {
        ...state,
        shouts: action.payload,
        loading: false,
      };
    case LIKE_SHOUT:
    case UNLIKE_SHOUT:
      let index = state.shouts.findIndex(
        (shout) => shout.shoutId === action.payload.shoutId
      );
      state.shouts[index] = action.payload;
      if (state.shout.shoutId === action.payload.shoutId) {
        state.shout = action.payload;
      }
      return {
        ...state,
      };
    case DELETE_SHOUT:
      // Find index of shout and remove it from the local state
      // Doesn't look good to call get shouts again bc front end will show
      // that it's loading, gives away that we're getting shouts again
      // Fact that we're getting a response means that we already deleted from the server
      index = state.shouts.findIndex(
        (shout) => shout.shoutId === action.payload
      );
      state.shouts.splice(index, 1);
      return {
        ...state,
      };
    case POST_SHOUT:
      return {
        ...state,
        shouts: [action.payload, ...state.shouts],
      };
    case SET_SHOUT:
      return {
        ...state,
        shout: action.payload,
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        shout: {
          ...state.shout,
          comments: [action.payload, ...state.shout.comments],
        },
      };
    default:
      return state;
  }
}
