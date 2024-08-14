import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from './Sidebar';
import './wodb.css';

// Sample data for charts
const workoutData = [
  { name: 'Week 1', workouts: 40, calories: 2000 },
  { name: 'Week 2', workouts: 30, calories: 1800 },
  { name: 'Week 3', workouts: 50, calories: 2200 },
  { name: 'Week 4', workouts: 45, calories: 2100 },
];

const WorkoutSection = () => {
  const [workoutTypes, setWorkoutTypes] = useState({
    men: [],
    women: [],
    pregnantWomen: [],
    weightLoss: [],
    muscleGain: [],
    weightGain: []
  });

  const [newWorkout, setNewWorkout] = useState({
    category: 'men',
    name: '',
    description: '',
    image: null
  });

  const [recentWorkouts, setRecentWorkouts] = useState([]);

  // Fetch workouts and recent workouts from the backend
  useEffect(() => {
    // Fetch recent workouts
    axios.get('http://localhost:9001/api/recent-workouts')
      .then(response => setRecentWorkouts(response.data))
      .catch(error => console.error('Error fetching recent workouts:', error));

    // Fetch workout types
    axios.get('http://localhost:9001/api/workout-types')
      .then(response => setWorkoutTypes(response.data))
      .catch(error => console.error('Error fetching workout types:', error));
  }, []);

  const handleAddWorkout = () => {
    if (newWorkout.name && newWorkout.description && newWorkout.image) {
      const formData = new FormData();
      formData.append('category', newWorkout.category);
      formData.append('name', newWorkout.name);
      formData.append('description', newWorkout.description);
      formData.append('image', newWorkout.image);

      axios.post('http://localhost:9001/api/add-workout', formData)
        .then(response => {
          // Update workoutTypes state with new workout
          setWorkoutTypes(prevState => ({
            ...prevState,
            [newWorkout.category]: [
              ...prevState[newWorkout.category],
              response.data
            ]
          }));
          setNewWorkout({ category: 'men', name: '', description: '', image: null });
        })
        .catch(error => console.error('Error adding workout:', error));
    }
  };

  const handleFileChange = (event) => {
    setNewWorkout(prevState => ({
      ...prevState,
      image: event.target.files[0]
    }));
  };

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

        {/* Add New Workout */}
        <Card style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="h6">Add New Workout</Typography>
            <TextField
              label="Workout Name"
              fullWidth
              margin="normal"
              value={newWorkout.name}
              onChange={(e) => setNewWorkout(prevState => ({ ...prevState, name: e.target.value }))}
            />
            <TextField
              label="Description"
              fullWidth
              margin="normal"
              value={newWorkout.description}
              onChange={(e) => setNewWorkout(prevState => ({ ...prevState, description: e.target.value }))}
            />
            <TextField
              type="file"
              fullWidth
              margin="normal"
              onChange={handleFileChange}
            />
            <TextField
              label="Category"
              select
              fullWidth
              margin="normal"
              value={newWorkout.category}
              onChange={(e) => setNewWorkout(prevState => ({ ...prevState, category: e.target.value }))}
              SelectProps={{ native: true }}
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="pregnantWomen">Pregnant Women</option>
              <option value="weightLoss">Weight Loss</option>
              <option value="muscleGain">Muscle Gain</option>
              <option value="weightGain">Weight Gain</option>
            </TextField>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddWorkout}
              style={{ marginTop: '20px' }}
            >
              Add Workout
            </Button>
          </CardContent>
        </Card>

        {/* Display Added Workouts */}
        {Object.entries(workoutTypes).map(([category, workouts]) => (
          <Card key={category} style={{ marginTop: '20px' }}>
            <CardContent>
              <Typography variant="h6">{category.charAt(0).toUpperCase() + category.slice(1)} Workouts</Typography>
              <Grid container spacing={3}>
                {workouts.map((workout, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardContent>
                        {workout.image && (
                          <img src={workout.image} alt={workout.name} style={{ width: '100%', height: 'auto' }} />
                        )}
                        <Typography variant="h6">{workout.name}</Typography>
                        <Typography>{workout.description}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkoutSection;
