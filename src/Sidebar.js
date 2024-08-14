import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard'; // Dashboard icon
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; // Workouts icon
import PsychologyIcon from '@mui/icons-material/Psychology'; // Mental Care icon
import RestaurantIcon from '@mui/icons-material/Restaurant'; // Diet Plan icon
import PeopleIcon from '@mui/icons-material/People'; // Users icon
import LogoutIcon from '@mui/icons-material/Logout'; // Logout icon
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Dashboard</h2>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/admin-dashboard" className="sidebar-link">
            <DashboardIcon className="sidebar-icon" />
            Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/workouts" className="sidebar-link">
            <FitnessCenterIcon className="sidebar-icon" />
            Workouts
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/mentalcare" className="sidebar-link">
            <PsychologyIcon className="sidebar-icon" />
            Mental Care
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/dietplan" className="sidebar-link">
            <RestaurantIcon className="sidebar-icon" />
            Diet Plan
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/analytics" className="sidebar-link">
            <PeopleIcon className="sidebar-icon" />
            Users
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/login" className="sidebar-link">
            <LogoutIcon className="sidebar-icon" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

