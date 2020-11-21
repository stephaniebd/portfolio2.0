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


const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}

function App() {
  const { width } = useViewport();
  const breakpoint = 480;
  const isMobile = width <  breakpoint;

  return (
    <Router>
      <div className="App"> 
        <Navbar />

          <Switch>
            <Route exact path="/">
              <Home isMobile={isMobile} />
            </Route>

            <Route path="/Work" component={ProjectSection}>
            </Route>

            <Route path="/DontDieFood">
              <DontDieFood width={width} />
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
