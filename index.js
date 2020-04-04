import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Test from './Test';
import Test1 from './Testkks';
import SimpleMap from './SimpleMap';
import News from './news';
import Resources from './resources';
class App extends Component {
  render() {
    return (
    <div>
      <div class="topnav">
        <a href="#news">Care4U</a>
        <div class="topnav-right">
        <a class="active" href="#home">Home</a>
        <a href="test.html">News</a>
        <a href="#contact">Food Resources</a>
        <a href="#about">Other Resources</a>
        </div>
      </div>
      
      <div>
         <SimpleMap/> 
      </div>
      <div>
         <News/> 
      </div>
      <div>
         <Test1/> 
      </div>
      <div>
         <Resources/> 
      </div>
    </div>
    );
  }
}
render(<App />, document.getElementById('root'));



