import React, { Component } from 'react';
import { render } from 'react-dom';
import Join from './Join';
import   './resources.css';

class Resources extends Component {
  render() {
    return (
    <div>
      <center>
      <div class="main-agileits"> 
	    <h2 class="sub-head"><font color="grey" size="6">Need Help<br/>
      </font></h2>
      </div>
      </center>
      <div class="columns">
        <ul class="price">
        <li class="header">Basic Needs</li>
        <li><input type="text" id="txtbox" placeholder="Name"/></li>
        <li><input type="text" id="txtbox" placeholder="Mobile No"/></li>
        <li><input type="text" id="txtbox" placeholder="Address"/></li>
        <li><input type="text" id="txtbox"  placeholder="Food or Water Need"/></li>
        <li><input type="text" id="txtbox" placeholder="Help Needed"/></li>
        <li class="grey"><a href="#" class="button">Get Help</a></li>
        </ul>
      </div>

      <div class="columns">
        <ul class="price">
        <li class="header">Other Needs</li>
        <li><input type="text" id="txtbox" placeholder="Name"/></li>
        <li><input type="text" id="txtbox"  placeholder="Mobile No"/></li>
        <li><input type="text" id="txtbox" placeholder="Address"/></li>
        <li><input type="text" id="txtbox" placeholder="Medicine or any need"/></li>
        <li><input type="text" id="txtbox" placeholder="Help Needed"/></li>
        <li class="grey"><a href="#" class="button">Get Help</a></li>
        </ul>
      </div>

      <div class="columns">
        <ul class="price">
        <li class="header">Self Covid test</li>
        <li><input type="text" id="txtbox" placeholder="Name"/></li>
        <li><input type="text" id="txtbox" placeholder="Mobile No"/></li>
        <li><input type="text" id="txtbox" placeholder="Address"/></li>
        <li><input type="text" id="txtbox" placeholder="Symptoms & Medical history"/></li>
        <li><input type="text" id="txtbox" placeholder="Help Needed"/></li>
        <li class="grey"><a href="#" class="button">Proceed for Test</a></li>
        </ul>
      </div>
      </div>
    )
  }
}
export default Resources;