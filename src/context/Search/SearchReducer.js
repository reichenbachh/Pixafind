import {
  SEARCH_IMAGES,
  SEARCH_IMAGES_PAG,
  SEARCH_IMAGES_INFO,
  SEARCH_IMAGES_INFO_1,
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
        images: action.payload[0],
        loading: false,
        rand: false,
        query: action.payload[1],
        totalResults: action.payload[0].total,
      };
    case SEARCH_IMAGES_PAG:
      return {
        ...state,
        images: action.payload[0],
        loading: false,
        rand: false,
        currentPage: action.payload[1],
      };
    case GET_RAND_IMG:
      return {
        ...state,
        images: action.payload,
        loading: false,
      };
    case SEARCH_IMAGES_INFO:
      return {
        ...state,
        details: action.payload,
        loading: false,
      };
    case SEARCH_IMAGES_INFO_1:
      return {
        ...state,
        details: action.payload,
        // loading: false,
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
