// AnalyticsDashboard.js
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Sidebar from './Sidebar';
import { Container, Grid, Paper, Typography } from '@mui/material';
import './AnalyticsDashboard.css';

const AnalyticsDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Container className="dashboard-content">
        <Typography variant="h4" gutterBottom>
          Analytics Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper className="chart-container">
              <Typography variant="h6">User Distribution</Typography>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 3000, label: 'Total Users' },
                      { id: 1, value: 1500, label: 'Daily Visits' },
                      { id: 2, value: 2000, label: 'Insights' },
                    ],
                  },
                ]}
                width={400}
                height={300}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className="chart-container">
              <Typography variant="h6">Monthly Progress</Typography>
              <BarChart
                series={[
                  {
                    data: [
                      { id: 0, label: 'Jan', value: 4000 },
                      { id: 1, label: 'Feb', value: 3000 },
                      { id: 2, label: 'Mar', value: 2000 },
                      { id: 3, label: 'Apr', value: 2780 },
                      { id: 4, label: 'May', value: 1890 },
                      { id: 5, label: 'Jun', value: 2390 },
                      { id: 6, label: 'Jul', value: 3490 },
                    ],
                  },
                ]}
                width={400}
                height={300}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AnalyticsDashboard;
