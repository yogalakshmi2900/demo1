import React from 'react';
import { BrowserRouter as Router,Redirect, Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import About from './components/about.js';
// import Page from './page.js';

function App() {
  const MyProject = "Hi, Welcome!";
  return (
    <Router>
      <Switch>
        <div className="App">
        <Route component={Header}/>
        <Route exact path="/home" component = {Home}/>
        <Route exact path="/about" component = {About}/>
        </div>
        </Switch>
    </Router>
  );
}

export default App;
