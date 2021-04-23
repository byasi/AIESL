import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import Components
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Projects from './components/Projects';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
//End of Components

function App() {
  return (
    <Router>
      <div className="wrapper">
      <Header/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/aboutus">
        <AboutUs/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/contactus">
        <ContactUs/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/projects">
          <Projects/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/services">
          <Services/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/team">
          <OurTeam/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
