import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import App from './App';
import LoginPage from './Login';
import './index.css'; 
import Workouts from './Workouts';
import MentalCare from './MentalCare';
import DietPlan from './DietPlan';
import MyProgress from './MyProgress';
import SignUpPage from './Signup';
import Home from './Home';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import WorkoutSection from './WorkoutSection';
import MentalCareDashboard from './MentalCareDashboard';
import BasicPie from './dietplandb';
import AnalyticsDashboard from './AnalyticsDashboard';

const AdminRoutes = ['/admin-dashboard','/admin/workouts','/admin/mentalcare','/admin/dietplan','/admin/Analytics',]; // Add other admin routes here

const MainApp = () => {
  const location = useLocation();
  const hideNavBar = AdminRoutes.some(route => location.pathname.includes(route));

  return (
    <>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/mental-care" element={<MentalCare />} />
        <Route path="/diet-plan" element={<DietPlan />} />
        <Route path="/my-progress" element={<MyProgress />} /> 
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin/workouts" element={<WorkoutSection />} />
        <Route path="/admin/mentalcare" element={<MentalCareDashboard />} />
        <Route path="/admin/dietplan" element={<BasicPie />} />
        <Route path="/admin/Analytics" element={<AnalyticsDashboard />} />
        {/* Add other admin routes here */}
      </Routes>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainApp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
