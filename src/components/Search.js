import React, { useState, useContext } from "react";
import SearchContext from "../context/Search/SearchContext";
const Search = () => {
  const [search, setSearch] = useState("");
  const searchContext = useContext(SearchContext);

  const { setError, srchImg } = searchContext;

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const searchItem = (e) => {
    if (search === "") {
      e.preventDefault();
      setError("Please enter something");
    } else {
      srchImg(search);
    }
  };
  return (
    <div className='wrapper'>
      <div className='center-align lead-search'>
        <h4>Search Pixafind,Find free stock photos from talented artists</h4>
      </div>
      <div className='search_box'>
        <input type='text' placeholder='search pixabay' onChange={onChange} />
        <a href='#!' onClick={searchItem}>
          <i className='fas fa-search srch'></i>
        </a>
      </div>
    </div>
  );
};

export default Search;
