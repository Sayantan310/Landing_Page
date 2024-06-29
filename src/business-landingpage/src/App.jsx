import React from 'react';
import './App.css';
import teamWorkingImage from './corporate-team-building.jpg';

function App() {
  return (
    <div className="App">
      <header className="flex justify-between items-center p-5 bg-gray-900 text-white">
        <div className="text-2xl font-bold">ABC Tech</div>
        <nav className="space-x-5">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Us</a>
          <a href="#price" className="hover:text-gray-400">Price</a>
          <a href="#login" className="hover:text-gray-400">Login</a>
          <a href="#start" className="bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-200">Start for free</a>
        </nav>
      </header>
      <main className="flex justify-between p-10 bg-gray-800 text-white">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Increase your Business with us!</h1>
          <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <button className="bg-pink-600 py-3 px-6 rounded text-white font-medium hover:bg-pink-700">REGISTER NOW</button>
        </div>
        <div>
          <img src={teamWorkingImage} alt="Team working" className="rounded-lg w-96 h-auto" />
        </div>
      </main>
    </div>
  );
}

export default App;