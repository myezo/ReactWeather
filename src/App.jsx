import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Navmenu from './components/Navmenu';
import Main from './components/Main';
import About from './components/About';
import Weather from './components/Weather';
import Examples from './components/Examples';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navmenu />
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/examples" component={Examples} />
          <Route path="/weather" component={Weather} />
        </div>
      </Router>
    );
  }
}

export default App;
