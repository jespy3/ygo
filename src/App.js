import React from 'react';
import logo from './logo.svg';
import './App.css';

import Basic from './components/basic';
import ReferenceLine from './components/referenceLine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the YGO classifier! This site under construction.
        </p>
        <Basic/>
        <ReferenceLine/>
      </header>
    </div>
  );
}

export default App;
