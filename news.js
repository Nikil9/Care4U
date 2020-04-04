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
        width={'500px'}
        height={'300px'}
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

<button onclick="listView()"><i class="fa fa-bars"></i> List</button>    
<button onclick="gridView()"><i class="fa fa-th-large"></i> Grid</button>

<div class="row">
  <div class="column" >
    <h2>Column 1</h2>
    <p>Some text.</p>
  </div>
  <div class="column" >
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
</div>

<div class="row">
  <div class="column" >
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>
  <div class="column" >
    <h2>Column 4</h2>
    <p>Some text..</p>
  </div>
</div>
      </div>
    )
  }
}
export default News;

