import React from 'react';
import logo from './logo.svg';
import './App.css';

import Basic from './components/basic';
import ReferenceLine from './components/referenceLine';
import Welcome from './components/welcome';
import Clock from "./components/clock";
import Toggle from "./components/toggle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <Clock />
        <Toggle/>
        <Basic />
        <ReferenceLine />
      </header>
    </div>
	);
}

// Some rollback in the deployment happened. Investigating now

export default App;
