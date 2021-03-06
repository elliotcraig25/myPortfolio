import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router } from 'react-router-dom';
import appRouting from './routes/appRouting';
// import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {appRouting}
        </Router>
      </div>
    );
  }
}

export default App;
