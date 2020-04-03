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

    <frameset rows = "10%,80%,10%">
      <frame name = "top" src = "test.html" />
      <frame name = "main" src = "" />
      <frame name = "bottom" src = "" />    
   </frameset>

  </div>  
    );
  }
}

render(<App />, document.getElementById('root'));
