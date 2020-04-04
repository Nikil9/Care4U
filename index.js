import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Test from './Test';
import Testkks from './App';
import SimpleMap from './SimpleMap';

class App extends Component {
  render() {
    return (
    <div>
      <div class="topnav">
        <a href="#news">Care4U</a>
        <div class="topnav-right">
        <a class="active" href="#home">Home</a>
        <a href="test.html">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        </div>
      </div>
      <div>
         <App/> 
      </div>
    </div>
    );
  }
}
render(<App />, document.getElementById('root'));



