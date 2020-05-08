import {
  SEARCH_USERS,
  SET_ALERT,
  GET_REPOS,
  SET_LOADING,
  GET_USER,
  CLEAR_USERS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SEARCH_USERS:
      return {
        ...state,
        // fill the user with the payload
        users: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        useers: [],
      };
    case SET_LOADING:
      return {
        // state is immutable so we make a copy of it and add to it
        // as we cannot reassign it
        ...state,
        loading: true,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
      break;

    default:
      return state;
  }
};
