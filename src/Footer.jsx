import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import './Footer.css'; // Import the updated CSS

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-about">
          <h2>FitFreck</h2>
          <p>Your go-to fitness center for achieving your health and wellness goals.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul className="links-list">
            <li><a href="/home">Home</a></li>
            <li><a href="/workouts">Workouts</a></li>
            <li><a href="/dietplan">Diet Plan</a></li>
            <li><a href="/mentalcare">Mental Care</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><strong>Address:</strong> 123 Fitness St, Workout City, FIT 45678</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Email:</strong> info@fitfreck.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 FitFreck. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
