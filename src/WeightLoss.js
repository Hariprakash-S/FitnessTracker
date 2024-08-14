import React from 'react';
import './WorkoutMen.css'; // Ensure this path matches where you save the CSS file

const workouts = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_lGx6AmCRYDQOo4p_jhfk57kOg6p40OUig&s', // Replace with actual image URL
    name: 'Cardio Blast',
    benefits: 'Burns calories and improves cardiovascular health.'
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlu7QBZkjMij5K1m7Pl2YAWwzHlxFV5TjIew&s', // Replace with actual image URL
    name: 'HIIT',
    benefits: 'Effective for burning fat and boosting metabolism.'
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBj2ejbS8PesFy9sJFlcPIJJwtRPsVkuiXPA&s', // Replace with actual image URL
    name: 'Jump Rope',
    benefits: 'Great for cardiovascular fitness and calorie burning.'
  },
  {
    id: 4,
    image: 'https://asitisnutrition.com/cdn/shop/articles/tattooed-muscular-athlete-doing-jumping-jacks-isolated-white-brick-wall-black-pull-bar_1_800x800.jpg?v=1647663331', // Replace with actual image URL
    name: 'Burpees',
    benefits: 'Full-body workout that helps in burning calories and building strength.'
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsJiq0beDKrqd4xBUaodhKALsKYupiJIefA&s', // Replace with actual image URL
    name: 'Mountain Climbers',
    benefits: 'Cardio exercise that targets multiple muscle groups.'
  },
  {
    id: 6,
    image: 'https://hips.hearstapps.com/hmg-prod/images/man-exercising-at-home-royalty-free-image-1645047847.jpg', // Replace with actual image URL
    name: 'Bodyweight Squats',
    benefits: 'Helps in building lower body strength and burning calories.'
  },
  {
    id: 7,
    image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/01/male-kettlebell-swings-1296x728-header-1296x729.jpg?w=1155&h=2268', // Replace with actual image URL
    name: 'Kettlebell Swings',
    benefits: 'Excellent for improving strength and burning fat.'
  },
  {
    id: 8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5fvs9x2lqdTlkI73Zx5zvMXY3XZMM7uGZQ&s', // Replace with actual image URL
    name: 'Treadmill Running',
    benefits: 'Improves cardiovascular health and aids in weight loss.'
  }
  // Add more workout items as needed
];

const WorkoutWeightLoss = () => (
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
);

export default WorkoutWeightLoss;
