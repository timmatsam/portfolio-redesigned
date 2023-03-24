import React from 'react';
import './App.css';
import image from './minimalist-rain-web-design.png'
import HeroSection from './HeroSection';
import { NavBar } from './NavBar';


function App() {
  return (

    <div className="App">
      <div className="Box">
        <NavBar />
        <HeroSection />
        <img alt='rain-falling-down-on-macbook' src={image} className="w-4/5" />
      </div>
    </div>
  );
}


export default App;
