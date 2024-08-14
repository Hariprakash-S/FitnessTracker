import React from 'react';
import './WorkoutMen.css'; // Ensure this path matches where you save the CSS file

const workouts = [
  {
    id: 1,
    image: 'https://www.mensjournal.com/.image/t_share/MTk2MTM3Mjk2NTQ5NTIwNTI5/_main_liftlift.jpg', // Replace with actual image URL
    name: 'Heavy Lifting',
    benefits: 'Builds muscle mass and strength.'
  },
  {
    id: 2,
    image: 'https://blogscdn.thehut.net/wp-content/uploads/sites/495/2018/10/25171220/Blog-Deadlifting-Male_1800x672_1200x672_acf_cropped.jpg', // Replace with actual image URL
    name: 'Deadlifts',
    benefits: 'Targets multiple muscle groups and increases overall strength.'
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAjOd937mbAMQ8_eTPxSIqqnk-jsoqL5_Xw&s', // Replace with actual image URL
    name: 'Squats',
    benefits: 'Enhances lower body strength and muscle mass.'
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjR5NTvHH8SeRQ2B1i9Hv-JwJr1Q3ScbqotA&s', // Replace with actual image URL
    name: 'Bench Press',
    benefits: 'Builds upper body strength and muscle mass.'
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v-zQIRjkKSUmSvAErxAlzq-ta2ndsvBb-w&s', // Replace with actual image URL
    name: 'Overhead Press',
    benefits: 'Strengthens shoulders and upper body muscles.'
  },
  {
    id: 6,
    image: 'https://media.gq.com/photos/5a3d41215f1f364364dd437a/16:9/w_2560%2Cc_limit/ask-a-trainer-bicep-curl.jpg', // Replace with actual image URL
    name: 'Bicep Curls',
    benefits: 'Targets and builds bicep strength and muscle mass.'
  },
  {
    id: 7,
    image: 'https://cdn.muscleandstrength.com/sites/default/files/tricep-dip.jpg', // Replace with actual image URL
    name: 'Tricep Dips',
    benefits: 'Strengthens triceps and enhances arm muscle mass.'
  },
  {
    id: 8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrjoPAjVT2CYSFJhgDuPPBL2bov7LGQa1Xuw&s', // Replace with actual image URL
    name: 'Lunges',
    benefits: 'Builds lower body strength and improves balance.'
  }
  // Add more workout items as needed
];

const WorkoutWeightGain = () => (
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

export default WorkoutWeightGain;
