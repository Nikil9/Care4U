import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Test extends Component {
  render() {
    return (
      <div>
        <div class="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>
      </div>
    )
  }
}
export default Test;