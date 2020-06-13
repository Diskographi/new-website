import React from 'react';
import './App.css';
import { Home } from './components/home';
import { Header } from './components/header';
import { Gallery } from './components/gallery';
import { Footer } from './components/footer';
import { Projects } from './components/projects';
import { Biography } from './components/biography';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import mainIcon from "./big_icon.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={mainIcon} 
        className="App-logo" 
        alt="logo" />
         <h3 style={{topPadding: "10px", fontFamily: "Parkavenue, cursive", letterSpacing: "0.15em"}}> Developer from Santa Clarita ・ California ☀️ </h3>
      </header>
      <Router>
      <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Gallery' component={Gallery} />
        <Route exact path='/Bio' component={Biography} />
        <Route exact path='/Projects' component={Projects} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
