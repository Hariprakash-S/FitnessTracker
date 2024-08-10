import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <img src='./fit3.png' alt="Logo" className="logo" />
        <div className="navLinks">
          <Link to="/" className="navLink">Home</Link>
          <Link to="/workouts" className="navLink">Workouts</Link>
          <Link to="/mental-care" className="navLink">Mental Care</Link>
          <Link to="/diet-plan" className="navLink">Diet Plan</Link>
          <Link to="/my-progress" className="navLink">My Progress</Link>
          <Link to="/contact" className="navLink">Contact</Link>
        </div>
        <Link to="/login" className="loginButton">Login</Link>
      </nav>
    </div>
  );
}

export default App;