import React, { useState } from 'react';
import './Workouts.css';

const workouts = [
  { name: 'Cycling', image:'https://www.trainerroad.com/blog/wp-content/uploads/2021/11/benefits-of-cycling-1024x497.jpg'},
  { name: 'Running', image:'https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk2MTM2OTgxNjc1Nzc5NTg5/fullbodyprofilecoupleyoungtwofriendsstrongsportysportswoman.webp'},
  { name: 'Swimming', image:'https://www.verywellfit.com/thmb/QkmaljgEb1ImS2uNFKHDdQ8lK5Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3496001-GettyImages-963836496-b5597e6561764becabe815c7a241306d.jpg'},
  { name: 'Yoga', image:'https://img.freepik.com/premium-photo/woman-doing-yoga-beach-with-mountain-background_865967-25537.jpg?w=900'},
  { name: 'Weightlifting', image:'https://blog.nasm.org/hubfs/women-weight-lifting.jpg'},
  { name: 'Boxing', image:'https://t3.ftcdn.net/jpg/08/73/21/92/240_F_873219234_6zLDRlL1dCV8y4UxquQvwnao5xIDbvNI.jpg'},
  { name: 'Pilates', image:'https://t3.ftcdn.net/jpg/01/90/99/82/240_F_190998232_DqWgqdnUIHIrmUgABbMtCVdecTsAdfjg.jpg'},
  { name: 'CrossFit', image:'https://t4.ftcdn.net/jpg/01/98/29/81/240_F_198298136_9vSv6XL5vJonhRjhmgdj4hCfG2fLXHVX.jpg'},
  { name: 'Rowing', image:'https://fitlifefanatics.com/wp-content/uploads/2021/01/What-Type-of-Rowing-Resistance-Mechanism-Works-Best-Important-Things-to-Think-of-Before-Buying-a-New-Rowing-Machine.png'},
  { name: 'Hiking', image:'https://coremoment.b-cdn.net/wp-content/uploads/2024/01/hiking-on-trail-1024x622.webp'},
  { name: 'Dance', image:'https://images.everydayhealth.com/images/healthy-living/fitness/dance-workout-overview-guide-1440x810.jpg?sfvrsn=a409050e_5'},
  { name: 'Kickboxing', image:'https://i0.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2022/06/iStock-1150770258.jpg?resize=1024%2C678&ssl=1'},
  { name: 'Stretching', image:'https://www.houstonmethodist.org/-/media/images/contenthub/article-images/wellness/2022/hub_howstretchinghelps_article.ashx?mw=1382&hash=44B752D83339FC61A0FFD31C25A21803'},
  { name: 'Jump Rope', image:'https://static.toiimg.com/thumb/71956822.cms?width=680&height=512&imgsize=836678'},
  { name: 'Spinning', image:'https://shop.us.thesportsedit.com/cdn/shop/files/banner_1-online-spin_736x400_crop_center@2x.jpg?v=14092701861594156508'},
  { name: 'Climbing', image:'https://www.mapotapo.com/_next/image?url=https%3A%2F%2Fdklkud2sn1tvi.cloudfront.net%2Fblogposts%2F656d9c0509b9c7bee7abaabd%2Fcover.jpg&w=1080&q=75'},
  { name: 'Tai Chi', image:'https://i.pinimg.com/474x/40/f9/36/40f936cf3029dc3c80143dbcad91c055.jpg'},
  { name: 'Kettlebell Training', image:'https://i.pinimg.com/474x/46/90/e9/4690e9d9d33c530750e226462399bc19.jpg'}, 
  { name: 'Zumba', image:'https://i.pinimg.com/474x/b6/61/85/b66185012142e07b5789c2f7a03ffce2.jpg'},
  { name: 'Barre', image:'https://i.pinimg.com/474x/85/fa/9d/85fa9d01451c90fb7565bb0fc547b3f7.jpg'},
  { name: 'Barre', image:'https://i.pinimg.com/474x/85/fa/9d/85fa9d01451c90fb7565bb0fc547b3f7.jpg'},
  { name: 'Barre', image:'https://i.pinimg.com/474x/85/fa/9d/85fa9d01451c90fb7565bb0fc547b3f7.jpg'},
  { name: 'Barre', image:'https://i.pinimg.com/474x/85/fa/9d/85fa9d01451c90fb7565bb0fc547b3f7.jpg'},
  { name: 'Barre', image:'https://i.pinimg.com/474x/85/fa/9d/85fa9d01451c90fb7565bb0fc547b3f7.jpg'},
];


function Workouts() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorkouts = workouts.filter(workout =>
    workout.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="workouts-page">
      <div className="content">
        <input
          type="text"
          placeholder="Search Workouts"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <div className="grid">
          {filteredWorkouts.map((workout, index) => (
            <div key={index} className="grid-item">
              <img src={workout.image} alt={workout.name} />
              <div className="caption">{workout.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workouts;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Workouts.css'; // Import your CSS file

// const categories = ['Men', 'Women', 'Pregnancy Women', 'Kids'];

// const Workouts = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [workoutImages, setWorkoutImages] = useState([]);

//   const fetchImages = async (category) => {
//     try {
//       const response = await axios.get(`API_URL_FOR_${category.toUpperCase()}_IMAGES`);
//       setWorkoutImages(response.data);
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     fetchImages(category);
//   };

//   return (
//     <div className="workouts-container">
//       <div className="categories-container">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`category-button ${selectedCategory === category ? 'active' : ''}`}
//             onClick={() => handleCategoryClick(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {selectedCategory && (
//         <div className="image-grid">
//           {workoutImages.map((image, index) => (
//             <img key={index} src={image.url} alt={`${selectedCategory} Workout ${index}`} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Workouts;
