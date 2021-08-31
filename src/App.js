import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import Components

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Projects from './pages/Projects';
import Services from './pages/Services';
// import OurTeam from './components/OurTeam';
//End of Components

function App() {
  return (
    <Router>
      <div >
     <Switch>
     
        <Route exact path="/">
        <Home/>
        </Route>

        <Route path="/aboutus" exact>
        <AboutUs/>
        </Route>

        <Route path="/contactus" exact>
        <ContactUs/>
        </Route>

        <Route path="/projects" exact>
          <Projects/>
        </Route>

        <Route path="/services" exact>
          <Services/>
        </Route>

        {/* <Route path="/team" exact>
          <OurTeam/>
        </Route> */}

      </Switch>
    </div>
    </Router>
  );
}

export default App;
