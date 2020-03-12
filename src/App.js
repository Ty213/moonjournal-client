import React, { useState } from 'react';
import NewEntry from './components/NewEntry/NewEntry'
import './App.css';



function App() {




  return (
    <div className="App">
      <header className="App-header">
        <span role="img" aria-label="moon" className="logo">🌙</span> <p>moon journal</p>
      </header>


    <NewEntry />




    </div>
  );
}

export default App;
