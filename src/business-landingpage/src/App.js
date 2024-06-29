import React from 'react';
import './App.css';
import teamWorkingImage from './corporate-team-building.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">ABC Tech</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#price">Price</a>
          <a href="#login">Login</a>
          <a href="#start" className="start-button">Start for free</a>
        </nav>
      </header>
      <main className="main-content">
        <div className="text-section">
          <h1>Increase your Business with us!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <button className="register-button">REGISTER NOW</button>
        </div>
        <div className="image-section">
          <img src={teamWorkingImage} alt="Team working" />
        </div>
      </main>
    </div>
  );
}

export default App;