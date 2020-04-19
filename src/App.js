import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Gallery } from './components/gallery';
import { Footer } from './components/footer';
import { Projects } from './components/projects';
import { Biography } from './components/biography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/11987121_10205227965926472_8485481170584507529_n.jpg?_nc_cat=104&_nc_sid=daf655&_nc_ohc=W-mvhfnR_xMAX_i6zxo&_nc_ht=scontent-lax3-1.xx&oh=f5c0019cc256c3bd0a0ccbeca3a99632&oe=5E9E76CC" 
        className="App-logo" 
        alt="logo" />
          Lorem Ipsum
      </header>
      <Router>
        <Route path='/Gallery' component={Gallery} />
        <Route path='/Bio' component={Biography} />
        <Route path='/Projects' component={Projects} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
