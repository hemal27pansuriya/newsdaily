import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
  pageSize = 6
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/"><News key='general' pageSize={this.pageSize} country='in' category='General' /></Route>
            <Route exact path="/business"><News key='business' pageSize={this.pageSize} country='in' category='Business' /></Route>
            <Route exact path="/health"><News key='health' pageSize={this.pageSize} country='in' category='Health' /></Route>
            <Route exact path="/science"><News key='science' pageSize={this.pageSize} country='in' category='Science' /></Route>
            <Route exact path="/sports"><News key='sports' pageSize={this.pageSize} country='in' category='Sports' /></Route>
            <Route exact path="/technology"><News key='technology' pageSize={this.pageSize} country='in' category='Technology' /></Route>
            <Route exact path="/entertainment"><News key='entertainment' pageSize={this.pageSize} country='in' category='Entertainment' /></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
