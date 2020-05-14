import React, { useContext } from "react";
import SearchContext from "../../context/Search/SearchContext";

const Error = () => {
  const searchContext = useContext(SearchContext);
  const { error } = searchContext;
  return (
    error !== null && (
      <div className='notify'>
        <i className='fas fa-exclamation-circle'></i>
        <p>{error}</p>
      </div>
    )
  );
};

export default Error;
