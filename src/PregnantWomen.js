import React from 'react';
import './WorkoutMen.css'; // Ensure this path matches where you save the CSS file

const workouts = [
  {
    id: 1,
    image: 'https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/5fd9cae4c0553e19c744d671_Yoga-during-pregnancy.jpg', // Replace with actual image URL
    name: 'Prenatal Yoga',
    benefits: 'Supports body changes and eases discomfort.'
  },
  {
    id: 2,
    image: 'https://www.verywellfit.com/thmb/GXOUJzqtX9gqjCLZk9tWst4JJFQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-much-walking-is-too-much-3975564-2237-9c1f6b10556445f28d8163b28b61291e.jpg', // Replace with actual image URL
    name: 'Walking',
    benefits: 'Gentle exercise that improves circulation and stamina.'
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsayUWp1WuWfQqcKOCmdLhel3M2t71xzujyg&s', // Replace with actual image URL
    name: 'Swimming',
    benefits: 'Low-impact exercise that relieves joint pressure and builds strength.'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1618524735/hello-baby/Prenatal-Pilates-header.jpg', // Replace with actual image URL
    name: 'Prenatal Pilates',
    benefits: 'Enhances core stability and improves posture.'
  },
  {
    id: 5,
    image: 'https://images.ctfassets.net/0k812o62ndtw/5AlSm20caPNPQyzZejXwHb/21b3696d5c70ac922932f31f14b6c777/Untitled_design___2023_03_08T112045.049_en409f4db405ab3c5bb513c39785f4dbdb.jpg?w=1024&q=85', // Replace with actual image URL
    name: 'Stretching',
    benefits: 'Increases flexibility and helps relieve muscle tension.'
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblVr1eOajap5X8YGuWUcApUBevZTRzctq9w&s', // Replace with actual image URL
    name: 'Modified Squats',
    benefits: 'Strengthens legs and core with reduced risk of strain.'
  },
  {
    id: 7,
    image: 'https://www.nourishmovelove.com/wp-content/uploads/2022/02/low-impact-cardio.jpg', // Replace with actual image URL
    name: 'Low-Impact Cardio',
    benefits: 'Boosts cardiovascular health without excessive strain.'
  },
  {
    id: 8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTurqc7RLA5yrP-zr6816gLd4IHU4B0X4PXsw&s', // Replace with actual image URL
    name: 'Standing Exercises',
    benefits: 'Strengthens muscles and improves balance while standing.'
  }
  // Add more workout items as needed
];

const PregnantWomen = () => (
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

export default PregnantWomen;
