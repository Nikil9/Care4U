import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Test from './Test'
import SimpleMap from './SimpleMap'

class App extends Component {
  render() {
    return (
  <div>
  <SimpleMap/>
  </div>
    );
  }
}

render(<App />, document.getElementById('root'));



