import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Test from './Test';
import Test1 from './Testkks';
import SimpleMap from './SimpleMap';
import News from './news';
import Resources from './resources';
import Join from './Join';

class App extends Component {
  constructor() {
    super();
    this.state = {
      home: true,
      news: false,
      resources: false,
      simpleMap: false,
      join: false,
    }
    //this.handle = this.handle.bind(this);
  }
  render() {
    function handleHome() {
      this.setState({
        home:true,
        news:false,
        simpleMap:false,
        resources:false,
        join: false,
      })
    }

    function handleNews() {
      this.setState({
        home:false,
        news:true,
        simpleMap:false,
        resources:false,
        join: false,
      })
    }

    function handleResources() {
      this.setState({
        home:false,
        news:false,
        simpleMap:false,
        resources:true,
        join: false,
      })
      
    }

    function handleMap() {
      this.setState({
        home:false,
        news:false,
        simpleMap:true,
        resources:false,
         join: false,
      })
      
    }

    function handleJoin() {
      this.setState({
        home:false,
        news:false,
        simpleMap:false,
        resources:false,
        join: true,
      })
      
    }

    return (
    <div class="home">
      <div class="topnav">
        <a href="#news">Care4U</a>
        <div class="topnav-right">
        <input type="submit" value="Home" onClick={handleHome.bind(this)}/>
        <input type="submit" value="Covid Zone" onClick={handleMap.bind(this)}/>
        <input type="submit" value="News" onClick={handleNews.bind(this)}/>
        <input type="submit" value="Resources" onClick={handleResources.bind(this)}/>
        <input type="submit" value="Join us" onClick={handleJoin.bind(this)}/>
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
      <div>
         {this.state.home?<Test/>:''}
      </div>
       <div>
         {this.state.join?<Join/>:''}
      </div>
    </div>
    );
  }
}
render(<App />, document.getElementById('root'));



