import React, { useEffect } from "react";
import Search from "./components/Search";
import Image from "./components/Result/Image";

import Error from "./components/layout/Error";
import Nav from "./components/layout/Nav";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchState from "./context/Search/SearchState";
import "./App.css";

function App() {
  useEffect(() => {
    //initialize minified javascript from materialize
    M.AutoInit();
  });
  return (
    <SearchState>
      <div className='App'>
        <Nav />
        <Error />
        <Search />
        <Image />
      </div>
    </SearchState>
  );
}

export default App;
