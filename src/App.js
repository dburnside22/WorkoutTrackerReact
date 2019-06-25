import React from 'react';
import './App.scss';
import Landing from './components/Landing/Landing.js';
import Navigation from './components/Navigation/Navigation.js';

function App() {
  return (
    <div className="App">
      < Navigation />
      < Landing />
    </div>
  );
}

export default App;
