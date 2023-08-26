import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {
  pageSize = 6
  apiKey=process.env.REACT_APP_NEWS_APIKEY
  
  state = {
    progress: 10 
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={4}
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey}  key='general' pageSize={this.pageSize} country='in' category='General' /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey}  key='business' pageSize={this.pageSize} country='in' category='Business' /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey}  key='health' pageSize={this.pageSize} country='in' category='Health' /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey}  key='science' pageSize={this.pageSize} country='in' category='Science' /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey}  key='sports' pageSize={this.pageSize} country='in' category='Sports' /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey}  key='technology' pageSize={this.pageSize} country='in' category='Technology' /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey}  key='entertainment' pageSize={this.pageSize} country='in' category='Entertainment' /></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
