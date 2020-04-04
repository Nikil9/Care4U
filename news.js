import React, { Component } from 'react';
import { render } from 'react-dom';

class News extends Component {
  render() {
    function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
}
    return (
     /* <div>
     The story of how the novel coronavirus emerged in Wuhan, China, has produced a nasty propaganda battle between the United States and China. The two sides have traded some of the sharpest charges made between two nations since the Soviet Union in 1985 falsely accused the CIA of manufacturing AIDS.

U.S. intelligence officials don’t think the pandemic was caused by deliberate wrongdoing. The outbreak that has now swept the world instead began with a simpler story, albeit one with tragic consequences: The prime suspect is “natural” transmission from bats to humans, perhaps through unsanitary markets. But scientists don’t rule out that an accident at a research laboratory in Wuhan might have spread a deadly bat virus that had been collected for scientific study.
      </div>*/
      <div>
      <div class="tab">
  <button class="tablinks" onmouseover="openCity(event, 'London')">London</button>
  <button class="tablinks" onmouseover="openCity(event, 'Paris')">Paris</button>
  <button class="tablinks" onmouseover="openCity(event, 'Tokyo')">Tokyo</button>
</div>

<div id="London" class="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p>
</div>

<div id="Tokyo" class="tabcontent">
  <h3>Tokyo</h3>
  <p>Tokyo is the capital of Japan.</p>
</div>
</div>
    )
  }
}
export default News;