import React from 'react';
import './Workouts.css';
import Footer from './Footer';

const workoutCategories = [
  { category: 'Men', route: '/workouts/men' },
  { category: 'Women', route: '/workouts/women' },
  { category: 'Pregnant Women', route: '/workouts/pregnantwomen' },
  { category: 'Muscle Gain', route: '/workouts/men' },
  { category: 'Weight Loss', route: '/workouts/weightloss' },
  { category: 'Weight Gain', route: '/workouts/weightgain' },
];

const Workouts = () => {
  return (
    <div>
    <div className="workouts-container">
      {workoutCategories.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <h1>{item.category}</h1>
            <button onClick={() => window.location.href = item.route}>Explore</button>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default Workouts;
