import { GET_POSTS_BY_USER, LOADING, ERROR } from "../types/postsTypes";
const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS_BY_USER:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
