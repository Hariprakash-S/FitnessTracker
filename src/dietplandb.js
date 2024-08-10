import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Sidebar from './Sidebar';
import './DietPlanDashboard.css';

const DietPlanDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Diet Plan Dashboard</h2>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 3000, label: 'Total Users' },
                { id: 1, value: 1500, label: 'Daily visits' },
                { id: 2, value: 2000, label: 'Insights' },
              ],
            },
          ]}
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default DietPlanDashboard;
