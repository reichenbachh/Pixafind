import {
  SEARCH_IMAGES,
  SEARCH_IMAGES_PAG,
  SEARCH_IMAGE_INFO,
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
        randImages: action.payload,
        loading: false,
      };
    case SEARCH_IMAGE_INFO:
      return {
        ...state,
        imageInfo: action.payload,
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
