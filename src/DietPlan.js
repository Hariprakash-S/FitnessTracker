import React, { useState } from 'react';
import './DietPlan.css';
import { Apple, FitnessCenter, Spa, Info } from '@mui/icons-material';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const plans = {
  weightLoss: {
    title: "Weight Loss",
    details: [
      { meal: "Breakfast", recommendations: ["Greek yogurt with berries", "Oatmeal with nuts", "Smoothie with spinach and banana"], image: "https://i.pinimg.com/474x/03/7c/c0/037cc0bc89bc23254fe916395edc9525.jpg" },
      { meal: "Lunch", recommendations: ["Grilled chicken salad", "Quinoa and vegetable stir-fry", "Turkey wrap with lettuce"], image: "https://i.pinimg.com/474x/06/a3/5d/06a35d78c872abbd447d0d8cdf8ea408.jpg" },
      { meal: "Dinner", recommendations: ["Baked salmon with asparagus", "Vegetable soup", "Lean beef and broccoli"], image: "https://i.pinimg.com/474x/f1/59/b3/f159b33d14fcb24ee05f1bf1889a2c92.jpg" },
      { meal: "Snacks", recommendations: ["Apple slices with almond butter", "Carrot sticks with hummus", "A handful of nuts"], image: "https://i.pinimg.com/474x/59/24/62/59246252fc7f131c50831764408fa11d.jpg" }
    ],
    colors: ['#FFDDC1', '#FFABAB', '#FFC3A0', '#FF677D']
  },
  muscleGain: {
    title: "Muscle Gain",
    details: [
      { meal: "Breakfast", recommendations: ["Egg white omelet with spinach", "Protein smoothie with oats", "Greek yogurt with honey and granola"], image: "https://i.pinimg.com/474x/4e/55/e7/4e55e733ae68709086e352631c75e9e8.jpg" },
      { meal: "Lunch", recommendations: ["Chicken breast with brown rice", "Beef stir-fry with vegetables", "Tuna salad with avocado"], image: "https://i.pinimg.com/474x/75/ca/de/75cade7e700b328537942a2c45c5f39a.jpg" },
      { meal: "Dinner", recommendations: ["Grilled steak with sweet potatoes", "Salmon with quinoa", "Chicken curry with cauliflower rice"], image: "https://i.pinimg.com/474x/ba/37/56/ba375680a095813065a05e57d1e0ec39.jpg" },
      { meal: "Snacks", recommendations: ["Protein bars", "Cottage cheese with fruit", "Peanut butter on whole grain toast"], image: "https://i.pinimg.com/474x/56/46/a1/5646a127aabcb542151d3f7b75a19341.jpg" }
    ],
    colors: ['#D6E8D6', '#C3F5A6', '#A5D8A1', '#86C0A8']
  },
  maintenance: {
    title: "Maintenance",
    details: [
      { meal: "Breakfast", recommendations: ["Whole grain toast with avocado", "Smoothie with protein powder", "Eggs with vegetables"], image: "https://i.pinimg.com/474x/6d/1b/58/6d1b58c879ea57e3d8d5ae1738b4f15a.jpg" },
      { meal: "Lunch", recommendations: ["Chicken and vegetable wrap", "Mixed green salad with beans", "Grilled fish tacos"], image: "https://i.pinimg.com/474x/b7/72/01/b7720183da4a567329a590803abd6f1c.jpg" },
      { meal: "Dinner", recommendations: ["Lean pork with sweet potato", "Vegetable and lentil stew", "Chicken and quinoa bowl"], image: "https://i.pinimg.com/474x/a3/a6/4e/a3a64eb4e1e7228db08ca5165aa0c913.jpg" },
      { meal: "Snacks", recommendations: ["Greek yogurt with honey", "Mixed nuts", "Fresh fruit"], image: "https://i.pinimg.com/474x/65/15/97/65159783e0e2e9701eb4de345ef6d359.jpg" }
    ],
    colors: ['#E5E5E5', '#C4C4C4', '#A9A9A9', '#8D8D8D']
  },
  vegan: {
    title: "Vegan",
    details: [
      { meal: "Breakfast", recommendations: ["Chia pudding with almond milk", "Smoothie with kale and berries", "Overnight oats with flaxseeds"], image: "https://i.pinimg.com/474x/37/96/32/379632babb2c6dcb2744dc7ff37c8cc4.jpg" },
      { meal: "Lunch", recommendations: ["Lentil soup", "Quinoa salad with chickpeas", "Tofu and vegetable stir-fry"], image: "https://i.pinimg.com/474x/e1/42/ea/e142eaa89c6a76ceb3d71206956b0659.jpg" },
      { meal: "Dinner", recommendations: ["Stuffed bell peppers with beans", "Vegan chili", "Zucchini noodles with tomato sauce"], image: "https://i.pinimg.com/474x/2a/8f/2e/2a8f2e9f30ea59112db680de15edfb5b.jpg" },
      { meal: "Snacks", recommendations: ["Fresh fruit", "Roasted chickpeas", "Vegetable sticks with guacamole"], image: "https://i.pinimg.com/474x/f2/2a/02/f22a0212b6668293d4312b58c42706f6.jpg" }
    ],
    colors: ['#C3E5C0', '#A3E4B8', '#8DCE8E', '#6FB77D']
  }
};

function DietPlan() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleClickOpen = (plan) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div className="dietplan-page">
      <h1 className="title">Diet Plan Page</h1>
      <div className="diet-plan">
        <div className="diet-category weight-loss" onClick={() => handleClickOpen('weightLoss')}>
          <Apple className="icon" />
          <h2>Weight Loss</h2>
          <ul>
            <li>Follow a calorie deficit diet</li>
            <li>Increase protein intake</li>
            <li>Reduce refined carbs and sugars</li>
          </ul>
        </div>
        <div className="diet-category muscle-gain" onClick={() => handleClickOpen('muscleGain')}>
          <FitnessCenter className="icon" />
          <h2>Muscle Gain</h2>
          <ul>
            <li>Increase calorie intake</li>
            <li>Focus on protein-rich foods</li>
            <li>Include strength training exercises</li>
          </ul>
        </div>
        <div className="diet-category maintenance" onClick={() => handleClickOpen('maintenance')}>
          <FitnessCenter className="icon" />
          <h2>Maintenance</h2>
          <ul>
            <li>Balance calories in and out</li>
            <li>Maintain a balanced diet</li>
            <li>Include regular exercise</li>
          </ul>
        </div>
        <div className="diet-category vegan" onClick={() => handleClickOpen('vegan')}>
          <Spa className="icon" />
          <h2>Vegan</h2>
          <ul>
            <li>Include a variety of plant-based proteins</li>
            <li>Ensure adequate B12 intake</li>
            <li>Focus on whole, unprocessed foods</li>
          </ul>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
        <DialogTitle>
          {selectedPlan ? plans[selectedPlan].title : ''}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {selectedPlan && (
            <Grid container spacing={2}>
              {plans[selectedPlan].details.map((mealDetail, index) => (
                <Grid item xs={12} key={index}>
                  <Card className="detail-card" style={{ background: plans[selectedPlan].colors[index % plans[selectedPlan].colors.length] }}>
                    <CardContent>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={8}>
                          <Typography variant="h6" gutterBottom>{mealDetail.meal}</Typography>
                          <ul>
                            {mealDetail.recommendations.map((recommendation, i) => (
                              <li key={i}>{recommendation}</li>
                            ))}
                          </ul>
                        </Grid>
                        <Grid item xs={4}>
                          <Box
                            component="img"
                            src={mealDetail.image}
                            alt={`${mealDetail.meal} image`}
                            sx={{ width: '100%', borderRadius: '8px' }}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </DialogContent>
      </Dialog>
      
    </div>
  );
}

export default DietPlan;
