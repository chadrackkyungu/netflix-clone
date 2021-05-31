import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeScreen from './HomeSreen';

function App() {
  return (
    <div className="app">
      <HomeScreen />
    </div>
  );
}

export default App;
