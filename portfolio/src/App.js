import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div className="App"> 
        <Navbar />
          <Switch>
            
            <Route exact path="/">
              <Home />
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

            <Route path="/resume">
              <Resume />
            </Route>

          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
