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
      <div className="container">
        <div className="App">
          <Switch>
              <Route path="/">
                {/* <Home /> */}
              </Route>
              <Route path="/work">
                {/* {render work section} */}
              </Route>
              <Route path="/dont-die-food">
                {/* {render ddf page} */}
              </Route>
              <Route path="/thinktwice">
                {/* {render tt page} */}
              </Route>
              <Route path="/contact">
                {/* <Contact /> */}
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
