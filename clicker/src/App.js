import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // data-test attribute so that everyone knows it is for testing and not to change it
    return <div data-test='component-app'></div>;
  }
}

export default App;
