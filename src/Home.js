import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import BMI_Calculator from './BMI_Calculator'; // Import the BMI Calculator component
import Footer from './Footer';

function Home() {
  return (
    <div>
    <div className="home-container">
      <div className="intro-container">
        <div className="text-container">
          <h1>Welcome to FitFreck</h1>
          <p className="quote">
            "Rise and Grind, Fitness Mind"
            <br />
            "Your health is an investment, not an expense."
            <br />
            "The only bad workout is the one that didn't happen."
          </p>
          <button className="explore-button">Explore More</button>
        </div>
        <img src="https://i.pinimg.com/originals/d6/a5/8c/d6a58c5c55446868859e627b519de896.jpg" alt="Fitness" className="fitness-image" />
      </div>
      
      <div className="carousel-container">
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          <div>
            <div className="carousel-text">"Stay focused and never give up!"</div>
          </div>
          <div>
            <div className="carousel-text">"Consistency is key to success."</div>
          </div>
          <div>
            <div className="carousel-text">"Every workout counts!"</div>
          </div>
          <div>
            <div className="carousel-text">"Push harder than yesterday."</div>
          </div>
          <div>
            <div className="carousel-text">"Believe in yourself and all that you are."</div>
          </div>
          <div>
            <div className="carousel-text">"Your only limit is you."</div>
          </div>
        </Carousel>
      </div>

      <BMI_Calculator /> {/* Add the BMI Calculator component here */}
     
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
