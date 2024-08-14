import React from 'react';
import './WorkoutMen.css'; // Ensure this path matches where you save the CSS file
import Footer from './Footer';

const workouts = [
  {
    id: 1,
    image: 'https://i.pinimg.com/474x/f0/fc/07/f0fc0719e5d34b28d9164e38cd9d33f0.jpg',
    name: 'Push-ups',
    benefits: 'Builds upper body strength and endurance.'
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/474x/47/63/3c/47633ca43d6658b7e686623318bd4739.jpg',
    name: 'Squats',
    benefits: 'Strengthens lower body muscles and improves balance.'
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/474x/de/1e/15/de1e156ac14ffee13ff2df1296716acc.jpg',
    name: 'Planks',
    benefits: 'Enhances core strength and stability.'
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/474x/07/bf/df/07bfdf05b542c08766ffba5d2a2015ec.jpg',
    name: 'Burpees',
    benefits: 'Boosts cardiovascular fitness and full-body strength.'
  },
  {
    id: 5,
    image: 'https://i.pinimg.com/474x/74/ed/c3/74edc35ccb6eefde91ef71b1bfe1a6d4.jpg',
    name: 'Lunges',
    benefits: 'Improves leg strength and balance.'
  },
  {
    id: 6,
    image: 'https://i.pinimg.com/474x/a8/73/6b/a8736bcec4c9a40d761327663cdeeab9.jpg',
    name: 'Mountain Climbers',
    benefits: 'Increases core strength and cardiovascular endurance.'
  },
  {
    id: 7,
    image: 'https://i.pinimg.com/474x/cf/36/41/cf3641841e7b0f87c7120d442496fa3c.jpg',
    name: 'Leg Raises',
    benefits: 'Strengthens lower abdominal muscles.'
  },
  {
    id: 8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS6kEEMEHYozHIV6eO2wXQbye5JVx9Ae9tQ7zydmJeqH1K5nil',
    name: 'Dips',
    benefits: 'Enhances tricep and shoulder strength.'
  }
  // Remove or comment out excess workouts if not needed
];

const WorkoutMen = () => (
    <div>
  <div className="workout-men-container">
    {workouts.map(workout => (
      <figure key={workout.id} className="snip1527">
        <div className="image">
          <img src={workout.image} alt={workout.name} />
        </div>
        <figcaption>
          <h3>{workout.name}</h3>
          <p>{workout.benefits}</p>
        </figcaption>
      </figure>
    ))}
  </div>
  </div>
);

export default WorkoutMen;
