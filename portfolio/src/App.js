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
import ProjectSection from "./components/ProjectSection";
import Resume from "./components/Resume";
import Contact from "./pages/Contact";
import DontDieFood from "./pages/DontDieFood";
import Home from "./pages/Home";
import ThinkTwice from "./pages/ThinkTwice";


function App() {
  return (
    <Router>
      <div className="App"> 
        <Navbar />
          <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/Work" component={ProjectSection}>
            </Route>

            <Route path="/DontDieFood">
              <DontDieFood />
            </Route>

            <Route path="/ThinkTwice">
              <ThinkTwice />
            </Route>

            <Route path="/Contact">
              <Contact />
            </Route>

            <Route path="/Resume">
              <Resume />
            </Route>

          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
