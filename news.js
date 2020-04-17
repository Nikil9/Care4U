import React, { Component } from 'react';
import { render } from 'react-dom';
import Chart from 'react-google-charts'

class News extends Component {
  render() {
    var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}
    return (
     <div>
      <Chart
        width={'750px'}
        height={'350px'}
        chartType="BubbleChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
          ['CAN', 80.66, 1.67, 'North America', 33739900],
          ['DEU', 79.84, 1.36, 'Europe', 81902307],
          ['DNK', 78.6, 1.84, 'Europe', 5523095],
          ['EGY', 72.73, 2.78, 'Middle East', 79716203],
          ['GBR', 80.05, 2, 'Europe', 61801570],
          ['IRN', 72.49, 1.7, 'Middle East', 73137148],
          ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
          ['ISR', 81.55, 2.96, 'Middle East', 7485600],
          ['RUS', 68.6, 1.54, 'Europe', 141850000],
          ['USA', 78.09, 2.05, 'North America', 307007000],
        ]}
        options={{
          title:
            'Correlation between people affected with corona ' +
            'and population of some world countries',
          hAxis: { title: 'Death Expectancy' },
          vAxis: { title: 'Covid Rate' },
          bubble: { textStyle: { fontSize: 11 } },
        }}
      rootProps={{ 'data-testid': '1' }}
      />

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


<div class="row">
  <div class="column1" >
    <h2>Incident Noticed</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>

  <div class="column2" >
    <h2>High Alert</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</div>

<div class="row">
  <div class="column3" >
    <h2>Covid-19</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
  </div>
  <div class="column4" >
    <h2>Ask for help</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  </div>
  </div>
    )
  }
}
export default News;

