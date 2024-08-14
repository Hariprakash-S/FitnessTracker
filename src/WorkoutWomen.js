import React from 'react';
import './WorkoutMen.css'; // Ensure this path matches where you save the CSS file

const workouts = [
  {
    id: 1,
    image: 'https://www.india.com/wp-content/uploads/2018/03/Yoga-for-women.jpg', // Replace with actual image URL
    name: 'Yoga',
    benefits: 'Improves flexibility and reduces stress.'
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrDLGvOTkJ_XdoktdGpOzVmm5EWgx7Qmsdg&s', // Replace with actual image URL
    name: 'Pilates',
    benefits: 'Strengthens core muscles and improves posture.'
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQctiuTyJu3MHro4PkewXO0FTAovlOJ2nhytA&s', // Replace with actual image URL
    name: 'Aerobics',
    benefits: 'Enhances cardiovascular fitness and endurance.'
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cHecUQFwKo3m8dgEfw-gRxHqGH95_42yMw&s', // Replace with actual image URL
    name: 'Strength Training',
    benefits: 'Builds muscle strength and improves overall fitness.'
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_vaz_6CBXt2TqdNlyKxwJC49iBSeOakp7ovQVhqWYWt7Nh7Upw_W70jGVrJmsHCl--o&usqp=CAU', // Replace with actual image URL
    name: 'Dance',
    benefits: 'Increases flexibility and coordination while having fun.'
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJ_KygMcXuxj_eyyZhblLRD00pLQ1Bz8ClQ&s', // Replace with actual image URL
    name: 'Meditation',
    benefits: 'Reduces stress and improves mental clarity.'
  },
  {
    id: 7,
    image: 'https://www.shape.com/thmb/e1oEJ2CjfrkhHGgABpnM3-42p7U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SQ-single-leg-deadlift-GettyImages-860707524-1-057da57891fd4ed8a17ca7272d023ff4.jpg', // Replace with actual image URL
    name: 'Leg Exercises',
    benefits: 'Strengthens and tones leg muscles.'
  },
  {
    id: 8,
    image: 'https://www.nourishmovelove.com/wp-content/uploads/2020/04/Best-Lower-Ab-Workout.jpg', // Replace with actual image URL
    name: 'Core Workouts',
    benefits: 'Enhances core strength and stability.'
  }
  // Add more workout items as needed
];

const WorkoutWomen = () => (
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

export default WorkoutWomen;
