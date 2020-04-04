import React, { Component } from 'react';
import { render } from 'react-dom';
import  resources from './resources.css';

class Resources extends Component {
  render() {
    return (
      <div>
      <h2>Responsive Pricing Tables</h2>
      <p>Resize the browser window to see the effect.</p>
      <div class="res">
      
        <div class="columns">
        <label>Basic</label>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        </div>

        <div>
        <label>Advanced</label>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        </div>

        <div>
        <label>Self covid Test</label>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        </div>
      </div>
  </div>
    )
  }
}
export default Resources;


