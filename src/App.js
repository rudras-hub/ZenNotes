import React, {Component} from 'react';
import {ZenEditor} from './Editor';
import logo from './logo.svg';
import './App.css';
import { className } from 'postcss-selector-parser';

class App extends Component{
  render() {
    return(
      <div className="App">
        <ZenEditor/>
      </div>
    );
  }
}

export default App;
