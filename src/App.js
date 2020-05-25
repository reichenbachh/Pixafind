import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchState from "./context/Search/SearchState";
import ImageDetails from "./components/Result/ImageDetails";
import StartupPage from "./components/pages/StartupPage";
import "./App.css";

function App() {
  useEffect(() => {
    //initialize minified javascript from materialize
    M.AutoInit();
  });
  return (
    <SearchState>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={StartupPage} />
            <Route exact path='/imageDetails/:id' component={ImageDetails} />
          </Switch>
        </div>
      </Router>
    </SearchState>
  );
}

export default App;
