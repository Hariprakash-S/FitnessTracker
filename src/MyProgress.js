import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './MyProgress.css';

const Progress = () => {
  const [weight, setWeight] = useState(65); // New state for weight
  const [steps, setSteps] = useState(0);
  const [timeSlept, setTimeSlept] = useState(0);
  const [heartRate, setHeartRate] = useState(0);
  const [caloriesBurnt, setCaloriesBurnt] = useState(0);
  const [weightLoss, setWeightLoss] = useState(0);
  const [summary, setSummary] = useState(''); // New state for summary

  const [yearlyChartData, setYearlyChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Yearly Weight Progress',
        data: [65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  });

  const [dailyChartData, setDailyChartData] = useState({
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Daily Weight Progress',
        data: [65, 64.5, 64, 63.5, 63, 62.5, 62],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      }
    ]
  });

  const calculateProgress = () => {
    const calories = steps * 0.04 + (heartRate * 0.1 * timeSlept);
    const weightLoss = calories / 7700; // 7700 calories = 1kg weight loss
    const newWeight = weight - weightLoss;

    setCaloriesBurnt(calories.toFixed(2));
    setWeightLoss(weightLoss.toFixed(2));

    const yearlyWeights = yearlyChartData.labels.map((_, index) => {
      return (newWeight - weightLoss * (index + 1)).toFixed(2);
    });

    setYearlyChartData({
      ...yearlyChartData,
      datasets: [
        {
          ...yearlyChartData.datasets[0],
          data: yearlyWeights
        }
      ]
    });

    const dailyWeights = dailyChartData.labels.map((_, index) => {
      return (newWeight - weightLoss * (index + 1) / 7).toFixed(2);
    });

    setDailyChartData({
      ...dailyChartData,
      datasets: [
        {
          ...dailyChartData.datasets[0],
          data: dailyWeights
        }
      ]
    });

    // Update summary based on calculated progress
    setSummary(`
      You've walked ${steps} steps, burnt ${calories.toFixed(2)} calories, and lost ${weightLoss.toFixed(2)} kg.
      Keep up the great work to achieve your goals!
    `);
  };

  return (
    <div className="progress-container">
      <h2 className="progress-title">Progress</h2>
      <div className="input-form">
        <div className="form-group">
          <label htmlFor="weight">Current Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="steps">Steps Walked:</label>
          <input
            type="number"
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlept">Time Slept (hours):</label>
          <input
            type="number"
            id="timeSlept"
            value={timeSlept}
            onChange={(e) => setTimeSlept(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="heartRate">Heart Rate (bpm):</label>
          <input
            type="number"
            id="heartRate"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
          />
        </div>
        <button className="calculate-button" onClick={calculateProgress}>Calculate</button>
      </div>
      <div className="charts-container">
        <div className="chart">
          <h3>Yearly Weight Progress</h3>
          <Line data={yearlyChartData} />
        </div>
        <div className="chart">
          <h3>Daily Weight Progress</h3>
          <Bar data={dailyChartData} />
        </div>
      </div>
      <div className="results">
        <h3>Results</h3>
        <p>Calories Burnt: {caloriesBurnt}</p>
        <p>Weight Loss: {weightLoss} kg</p>
      </div>
      <div className="summary">
        <h3>Summary of Achievements</h3>
        <p>{summary}</p>
      </div>
      <div className="goals">
        <h3>Goals</h3>
        <div className="goal-item">
          <span>Reach 50 kg by December</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="goal-item">
          <span>Run a marathon</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '40%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
