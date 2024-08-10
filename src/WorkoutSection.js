import React from 'react';
import { Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './Dashboard.css'; // Optional: Import specific styles for Dashboard if needed

// Sample data for charts and tables
const workoutData = [
  { name: 'Week 1', workouts: 40, calories: 2000 },
  { name: 'Week 2', workouts: 30, calories: 1800 },
  { name: 'Week 3', workouts: 50, calories: 2200 },
  { name: 'Week 4', workouts: 45, calories: 2100 },
];

const recentWorkouts = [
  { date: '2024-08-01', workout: 'Yoga', duration: '45 min', caloriesBurned: 300 },
  { date: '2024-08-02', workout: 'Cardio', duration: '30 min', caloriesBurned: 350 },
  { date: '2024-08-03', workout: 'Strength Training', duration: '60 min', caloriesBurned: 400 },
  { date: '2024-08-04', workout: 'Cycling', duration: '50 min', caloriesBurned: 500 },
];

const WorkoutSection = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Typography variant="h4" gutterBottom>
          Workout Management
        </Typography>

        <Grid container spacing={3}>
          {/* Workout Statistics Chart */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Weekly Workout Trends</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={workoutData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="workouts" stroke="#8884d8" />
                    <Line type="monotone" dataKey="calories" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent Workouts Table */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Recent Workouts</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Workout</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Calories Burned</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recentWorkouts.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>{row.workout}</TableCell>
                          <TableCell>{row.duration}</TableCell>
                          <TableCell>{row.caloriesBurned}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default WorkoutSection;
