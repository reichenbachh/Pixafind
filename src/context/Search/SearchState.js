import React, { useReducer } from "react";
import axios from "axios";
import SearchContext from "./SearchContext";
import SearchReducer from "./SearchReducer";
import {
  SEARCH_IMAGES,
  SEARCH_IMAGE_INFO,
  SET_ERROR,
  GET_RAND_IMG,
  SEARCH_IMAGES_PAG,
  CLEAR_CURRENT,
  SEARCH_FAIL,
  REMOVE_ERROR,
} from "../types";

const SearchState = (props) => {
  let unsplashApiKey;

  //Check environment
  if (process.env.NODE_ENV !== "production") {
    unsplashApiKey = process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY;
  } else {
    unsplashApiKey = process.env.UNSPLASH_API_ACCESS_KEY;
  }
  const initialState = {
    images: [],
    randImages: [],
    loading: true,
    error: null,
    imageInfo: null,
    userInfo: {},
    rand: true,
    query: "",
    totalResults: 0,
    currentPage: 1,
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  //Fetch Random Images for start up page from unsplash API
  const getRandImg = async () => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${unsplashApiKey}&count=30`
      );
      dispatch({
        type: GET_RAND_IMG,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_FAIL,
        payload: error,
      });
    }
  };

  //Fetch information from API based on dynamic use input
  const srchImg = async (query) => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${unsplashApiKey}&page=1&per_page=30&query=${query}`
      );
      dispatch({
        type: SEARCH_IMAGES,
        payload: [res.data, query],
      });
    } catch (error) {
      dispatch({
        type: SEARCH_FAIL,
        payload: error,
      });
    }
  };

  // Fetch Image Details
  const fetchImgInfo = async (id) => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/photos/${id}/?client_id=${unsplashApiKey}`
      );
      dispatch({
        type: SEARCH_IMAGE_INFO,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_FAIL,
        payload: error,
      });
    }
  };

  //Pagination logic
  //next page method
  const nextpage = async (PageNumber, query) => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${unsplashApiKey}&page=${PageNumber}&per_page=30&query=${query}`
      );
      dispatch({
        type: SEARCH_IMAGES_PAG,
        payload: [res.data, PageNumber],
      });
    } catch (error) {
      dispatch({
        type: SEARCH_FAIL,
        payload: error,
      });
    }
  };

  //Clears current image info before new information is pushed to the state
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };
  //Set Error
  const setError = (message) => {
    dispatch({
      type: SET_ERROR,
      payload: message,
    });

    clrError();
  };

  //Remove Error
  const clrError = () => {
    setTimeout(() => {
      dispatch({
        type: REMOVE_ERROR,
      });
    }, 3000);
  };
  return (
    <SearchContext.Provider
      value={{
        images: state.images,
        randImages: state.randImages,
        imageInfo: state.imageInfo,
        error: state.error,
        loading: state.loading,
        rand: state.rand,
        query: state.query,
        currentPage: state.currentPage,
        totalResults: state.totalResults,
        clearCurrent,
        nextpage,
        setError,
        getRandImg,
        srchImg,
        fetchImgInfo,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
