import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Paper, Typography, List, ListItem, ListItemText, IconButton, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from './Sidebar';
import './DietPlanDashboard.css';

const DietPlan = () => {
  const [dietPlans, setDietPlans] = useState([]);
  const [currentPlan, setCurrentPlan] = useState({ id: null, category: '', mealType: '', meal: '' });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [mealType, setMealType] = useState('');

  useEffect(() => {
    // Fetch diet plans from the server
    axios.get('http://localhost:9001/api/diet-plans')
      .then(response => {
        setDietPlans(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the diet plans!', error);
      });
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPlan({ ...currentPlan, category: e.target.value });
  };

  const handleMealChange = (e) => {
    setCurrentPlan({ ...currentPlan, meal: e.target.value });
  };

  const handleMealTypeClick = (type) => () => {
    setMealType(type);
    setCurrentPlan({ ...currentPlan, mealType: type });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const meal = currentPlan.meal;
    if (meal && mealType) {
      if (currentPlan.id !== null) {
        // Update existing diet plan
        axios.put(`http://localhost:9001/api/diet-plans/${currentPlan.id}`, currentPlan)
          .then(response => {
            setDietPlans(
              dietPlans.map((plan) =>
                plan.id === currentPlan.id ? response.data : plan
              )
            );
            setCurrentPlan({ id: null, category: selectedCategory, mealType: '', meal: '' });
            setMealType('');
          })
          .catch(error => {
            console.error('There was an error updating the diet plan!', error);
          });
      } else {
        // Create new diet plan
        axios.post('http://localhost:9001/api/diet-plans', currentPlan)
          .then(response => {
            setDietPlans([...dietPlans, response.data]);
            setCurrentPlan({ id: null, category: selectedCategory, mealType: '', meal: '' });
            setMealType('');
          })
          .catch(error => {
            console.error('There was an error creating the diet plan!', error);
          });
      }
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9001/api/diet-plans/${id}`)
      .then(() => {
        setDietPlans(dietPlans.filter((plan) => plan.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the diet plan!', error);
      });
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dietplan-content">
        <Typography variant="h4" gutterBottom>
          {currentPlan.id ? 'Edit Meal' : `Create New Meal for ${selectedCategory}`}
        </Typography>

        <FormControl fullWidth variant="outlined" className="category-select">
          <InputLabel id="category-label">Select Category</InputLabel>
          <Select
            labelId="category-label"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Select Category"
          >
            <MenuItem value="Vegan">Vegan</MenuItem>
            <MenuItem value="Weight Loss">Weight Loss</MenuItem>
            <MenuItem value="Muscle Gain">Muscle Gain</MenuItem>
            <MenuItem value="Maintenance">Maintenance</MenuItem>
          </Select>
        </FormControl>

        {selectedCategory && (
          <>
            <div className="meal-buttons">
              <div className='dietbutton'>
                <Button
                  variant="contained"
                  color={mealType === 'breakfast' ? 'secondary' : 'primary'}
                  onClick={handleMealTypeClick('breakfast')}
                >
                  Breakfast
                </Button>
              </div>
              <div className='dietbutton'>
                <Button
                  variant="contained"
                  color={mealType === 'lunch' ? 'secondary' : 'primary'}
                  onClick={handleMealTypeClick('lunch')}
                >
                  Lunch
                </Button>
              </div>
              <div className='dietbutton'>
                <Button
                  variant="contained"
                  color={mealType === 'dinner' ? 'secondary' : 'primary'}
                  onClick={handleMealTypeClick('dinner')}
                >
                  Dinner
                </Button>
              </div>
              <div className='dietbutton'>
                <Button
                  variant="contained"
                  color={mealType === 'snacks' ? 'secondary' : 'primary'}
                  onClick={handleMealTypeClick('snacks')}
                >
                  Snacks
                </Button>
              </div>
            </div>

            {mealType && (
              <form onSubmit={handleFormSubmit} className="dietplan-form">
                <TextField
                  className="meal-input"
                  label={mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                  variant="outlined"
                  fullWidth
                  value={currentPlan.meal}
                  onChange={handleMealChange}
                  required
                />
                <div className='dietbutton'>
                  <Button variant="contained" color="primary" type="submit">
                    {currentPlan.id ? 'Update Meal' : 'Create Meal'}
                  </Button>
                </div>
              </form>
            )}
          </>
        )}

        <div className="dietplan-list-container">
          <Typography variant="h5" gutterBottom>
            Existing {selectedCategory} Meals
          </Typography>
          <Paper elevation={3} className="dietplan-list">
            <List>
              {dietPlans
                .filter((plan) => plan.category === selectedCategory)
                .map((plan) => (
                  <ListItem key={plan.id} className="dietplan-list-item">
                    <ListItemText
                      primary={`${plan.mealType.charAt(0).toUpperCase() + plan.mealType.slice(1)}: ${plan.meal}`}
                    />
                    <div className="icon-buttons">
                      <IconButton edge="end" onClick={() => setCurrentPlan(plan)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" onClick={() => handleDelete(plan.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </ListItem>
                ))}
            </List>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
