import {
  SEARCH_IMAGES,
  SET_ERROR,
  SET_LOADING,
  REMOVE_ERROR,
  GET_RAND_IMG,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_IMAGES:
      return {
        ...state,
        images: action.payload,
        loading: false,
        rand: false,
      };
    case GET_RAND_IMG:
      return {
        ...state,
        images: action.payload,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};
