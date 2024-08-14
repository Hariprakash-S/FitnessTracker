import React, { useState } from 'react';
import axios from 'axios';
import './MentalCare.css';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import SpaIcon from '@mui/icons-material/Spa';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ComputerIcon from '@mui/icons-material/Computer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Footer from './Footer';

function MentalCare() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9001/mentalcare/submit', formData);
      setStatusMessage('Your message has been submitted successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setStatusMessage('There was an error submitting your message. Please try again later.');
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="mentalcare-page">
      <h1 className="title">Mental Care</h1>
      <p className="intro">Prioritize your mental well-being with our expert advice and personalized consultation. Your mental health is crucial to your overall fitness journey.</p>
      
      <h2 className="subtitle">Get a Personalized Consultation</h2>
      <form className="consultation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
      
      <h2 className="subtitle">Our Mental Care Services</h2>
      <p className="service-description">We offer a variety of services to help you manage stress, improve mental clarity, and achieve a balanced state of mind.</p>
      <div className="services-grid">
        <div className="service-item"><PersonIcon /> One-on-one therapy sessions</div>
        <div className="service-item"><GroupIcon /> Group therapy and support groups</div>
        <div className="service-item"><SpaIcon /> Mindfulness and meditation workshops</div>
        <div className="service-item"><SelfImprovementIcon /> Stress management programs</div>
        <div className="service-item"><AssignmentIndIcon /> Personalized mental health plans</div>
        <div className="service-item"><FitnessCenterIcon /> Yoga classes</div>
        <div className="service-item"><RestaurantIcon /> Nutrition advice</div>
        <div className="service-item"><ComputerIcon /> Mental health webinars</div>
        <div className="service-item"><MenuBookIcon /> Meditation guides</div>
        <div className="service-item"><DirectionsRunIcon /> Exercise routines</div>
      </div>
      <Footer/>
    </div>
  );
}

export default MentalCare;
