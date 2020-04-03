import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  render() {
    return (
    <div class="topnav">
    <a href="#news">Care4U</a>
    <div class="topnav-right">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  </div>
    );
  }
}

render(<App />, document.getElementById('root'));



