import React, { Component } from 'react';
import { render } from 'react-dom';
import   './resources.css';

class Resources extends Component {
  render() {
    return (
    <div>
      <h2>Responsive Pricing Tables</h2>
      <p>Resize the browser window to see the effect.</p>

      <div class="columns">
        <ul class="price">
        <li class="header">Pro</li>
        <li><input type="text" place holder="test"/></li>
        <li><input type="text" place holder="test"/></li>
        <li><input type="text" place holder="test"/></li>
        <li><input type="text" place holder="test"/></li>
        <li><input type="text" place holder="test"/></li>
        <li class="grey">Sign Up</li>
        </ul>
      </div>

      <div class="columns">
        <ul class="price">
        <li class="header">Pro</li>
        <li><input type="text" place holder="test"/></li>
        <li><input type="text" place holder="test"/></li>
        <li><input type="text" place holder="test"/></li>
        <li><input type="text" place holder="test"/></li>
        <li><input type="text" place holder="test"/></li>
        <li class="grey">Sign Up</li>
        </ul>
      </div>

      <div class="columns">
        <ul class="price">
        <li class="header">Pro</li>
        <li><input type="text" place holder="test"/></li>
        <li><input type="text" place holder="test"/></li>
        <li><input type="text" place holder="test"/></li>
        <li><input type="text" place holder="test"/></li>
        <li><input type="text" place holder="test"/></li>
        <li class="grey">Sign Up</li>
        </ul>
      </div>

      

      </div>
    )
  }
}
export default Resources;


