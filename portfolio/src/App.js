import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <h1> Yo </h1>
      <Switch>
          <Route path="/">
            {/* {render home page} */}
          </Route>
          <Route path="/dont-die-food">
            {/* {render ddf page} */}
          </Route>
          <Route path="/thinktwice">
            {/* {render tt page} */}
          </Route>
          <Route path="/contact">
            {/* {render contact page} */}
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
