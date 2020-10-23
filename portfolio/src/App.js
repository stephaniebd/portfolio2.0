import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="">
          
        </header>
        <Switch>
          <Route path="/">
            {/* { render home page} */}
          </Route>
          <Route path="/dont-die-food">
            {/* { render ddf page} */}
          </Route>
          <Route path="thinktwice">
            {/* { render tt page} */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
