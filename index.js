import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Test from './Test'

class App extends Component {
  render() {
    return (
    <div class="topnav">
    <a href="#news">Care4U</a>
    <div class="topnav-right">
      <a class="active" href="#home">Home</a>
      <a href="test.html">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>

  <Test/>
  </div>
    );
  }
}

render(<App />, document.getElementById('root'));



