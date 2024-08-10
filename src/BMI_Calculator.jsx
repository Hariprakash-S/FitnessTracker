// BMI_Calculator.js
import React, { useState } from 'react';
import './BMI_Calculator.css'; // Optional: for styling

function BMI_Calculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setCategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setCategory('Overweight');
      } else {
        setCategory('Obesity');
      }
    }
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className="bmi-result">
          <p>Your BMI: {bmi}</p>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default BMI_Calculator;
