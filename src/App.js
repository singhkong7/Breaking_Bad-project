import React from "react";
import './App.css';
import Homepage from "./Homepage/Homepage";
import {Switch,Route} from "react-router-dom";
import Page from "./Page";
function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/:id" component={Page} />
      </Switch>
    </div>
  );
}

export default App;
