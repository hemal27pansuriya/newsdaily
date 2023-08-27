import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6
  const apiKey = process.env.REACT_APP_NEWS_APIKEY

  const [progress, setProgress] = useState(10)

  const setProgressFn = (progress) => {
    setProgress(progress)
  }

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={4}
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setProgressFn} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='General' /></Route>
          <Route exact path="/business"><News setProgress={setProgressFn} apiKey={apiKey} key='business' pageSize={pageSize} country='in' category='Business' /></Route>
          <Route exact path="/health"><News setProgress={setProgressFn} apiKey={apiKey} key='health' pageSize={pageSize} country='in' category='Health' /></Route>
          <Route exact path="/science"><News setProgress={setProgressFn} apiKey={apiKey} key='science' pageSize={pageSize} country='in' category='Science' /></Route>
          <Route exact path="/sports"><News setProgress={setProgressFn} apiKey={apiKey} key='sports' pageSize={pageSize} country='in' category='Sports' /></Route>
          <Route exact path="/technology"><News setProgress={setProgressFn} apiKey={apiKey} key='technology' pageSize={pageSize} country='in' category='Technology' /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgressFn} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='in' category='Entertainment' /></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
