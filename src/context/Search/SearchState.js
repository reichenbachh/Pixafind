import React, { useReducer } from "react";
import axios from "axios";
import SearchContext from "./SearchContext";
import SearchReducer from "./SearchReducer";
import {
  SEARCH_IMAGES,
  SEARCH_VIDEOS,
  SET_ERROR,
  GET_RAND_IMG,
  SEARCH_IMAGES_PAG,
  SET_LOADING,
  SEARCH_FAIL,
  REMOVE_ERROR,
} from "../types";

const SearchState = (props) => {
  const initialState = {
    images: null,
    loading: true,
    error: null,
    rand: true,
    query: "",
    totalResults: 0,
    currentPage: 2,
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  //Fetch Random Images from pixabay
  const getRandImg = async () => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}&count=30`
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

  //search Images
  const srchImg = async (query) => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}&page=1&per_page=30&query=${query}`
      );
      dispatch({
        type: SEARCH_IMAGES,
        payload: [res.data, query],
      });
      console.log(res.data);
    } catch (error) {
      dispatch({
        type: SEARCH_FAIL,
        payload: error,
      });
    }
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

  //Pagination logic

  //next page method
  const nextpage = async (PageNumber, query) => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}&page=${PageNumber}&per_page=30&query=${query}`
      );
      dispatch({
        type: SEARCH_IMAGES_PAG,
        payload: [res.data, PageNumber],
      });
      console.log(res.data);
    } catch (error) {
      dispatch({
        type: SEARCH_FAIL,
        payload: error,
      });
    }
  };

  const test = async () => {
    console.log(true);
  };
  return (
    <SearchContext.Provider
      value={{
        images: state.images,
        error: state.error,
        loading: state.loading,
        rand: state.rand,
        query: state.query,
        currentPage: state.currentPage,
        totalResults: state.totalResults,
        nextpage,
        test,
        setError,
        getRandImg,
        srchImg,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
