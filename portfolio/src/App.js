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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Allo Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
