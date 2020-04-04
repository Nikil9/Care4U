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
  constructor() {
    super();
    this.state = {
      news: false,
      resources: false,
      simpleMap: true,
    }
    //this.handle = this.handle.bind(this);
  }
  render() {
    function handleHome() {
      this.setState({
        news:false,
        simpleMap:true,
        resources:false
      })
    }

    function handleNews() {
      this.setState({
        news:true,
        simpleMap:false,
        resources:false
      })
    }

    function handleResources() {
      this.setState({
        news:false,
        simpleMap:false,
        resources:true
      })
    }
    return (
    <div>
      <div class="topnav">
        <a href="#news">Care4U</a>
        <div class="topnav-right">
        <input type="submit" value="Home" onClick={handleHome.bind(this)}/>
        <input type="submit" value="News" onClick={handleNews.bind(this)}/>
        <input type="submit" value="Resources" onClick={handleResources.bind(this)}/>
        </div>
      </div>
      <div>
        {this.state.simpleMap?<SimpleMap/>:''}
      </div>
      <div>
         {this.state.news?<News/>:''}
      </div>
      <div>
         {this.state.resources?<Resources/>:''}
      </div>
    </div>
    );
  }
}
render(<App />, document.getElementById('root'));



