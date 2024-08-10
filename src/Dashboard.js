import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './Dashboard.css'; // Optional: Import specific styles for Dashboard if needed

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to the admin dashboard. Here you can manage all aspects of the fitness website.
        </Typography>
        <Grid container spacing={3}>
          {/* Card 1: Total Users */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Users</Typography>
                <Typography variant="h4">1,234</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: New Sign-ups */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">New Sign-ups</Typography>
                <Typography variant="h4">56</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3: Active Workouts */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Active Workouts</Typography>
                <Typography variant="h4">23</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Chart: Monthly Progress */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Monthly Progress</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
