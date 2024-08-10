// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Adjust the path according to your file structure

const NavBar = () => {
  return (
    <nav className="navBar">
      <img src='./fit3.png' alt="Logo" className="logo" />
      <div className="navLinks">
        <Link to="/" className="navLink">Home</Link>
        <Link to="/workouts" className="navLink">Workouts</Link>
        <Link to="/mental-care" className="navLink">Mental Care</Link>
        <Link to="/diet-plan" className="navLink">Diet Plan</Link>
        <Link to="/my-progress" className="navLink">My Progress</Link>
      
      </div>
      <Link to="/login" className="loginButton">Login</Link>
    </nav>
  );
};

export default NavBar;
