import React, {Component} from 'react';
import {ZenEditor} from './Editor';
import logo from './logo.svg';
import './App.css';
import { className } from 'postcss-selector-parser';

class App extends Component{
  render(){
    React.createElement("div",className = 'App', React.createElement('ZenEditor'))
  }
}

export default App;
