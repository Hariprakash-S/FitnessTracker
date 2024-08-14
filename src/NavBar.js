import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import './App.css';

const NavBar = () => {
  const userName = localStorage.getItem('userName');

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    // Add any additional logout logic here
    window.location.href = '/';
  };

  return (
    <nav className="navBar">
      <img src='./fit3.png' alt="Logo" className="logo" />
      <div className="navLinks">
        <Link to="/" className="navLink">Home</Link>
        <Link to="/workouts" className="navLink">Workouts</Link>
        <Link to="/mental-care" className="navLink">Mental Care</Link>
        <Link to="/diet-plan" className="navLink">Diet Plan</Link>
        <Link to="/my-progress" className="navLink">My Progress</Link>
      <Link className="navLink"><CgProfile /> {userName}</Link>
      </div>
  
      {userName ? (
        
        <button onClick={handleLogout} className="logoutButton">Logout</button>

      ) : (
        <Link to="/login" className="loginButton">Login</Link>
      )}
    </nav>
  );
};

export default NavBar;
