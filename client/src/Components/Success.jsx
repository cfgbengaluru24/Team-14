import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import "../styles/Success.css";
import success_pic1 from '../assets/success_pic1.jpg';
import success_pic2 from '../assets/success_pic2.jpg';
import success_pic3 from '../assets/success_pic3.jpg';

const Success = () => {
  const [experience, setExperience] = useState('');

  const handleInputChange = (event) => {
    setExperience(event.target.value);
  };

  return (
    <div className="lander-container">
        
        <div className="container">
      <div className="input-section">
        <h2 className="title">Describe your experience with Rohini</h2>
        <textarea
          value={experience}
          onChange={handleInputChange}
          placeholder="Share your thoughts..."
          className="textarea"
        />
      </div>
      <div className="carousel-section">
        <h2 className="title">Success Stories</h2>
        <Carousel showThumbs={false} autoPlay infiniteLoop interval={3000} stopOnHover={true}>
          <div>
            <img src={success_pic1} alt="Success Story 1" />
            <p className="legend">Success Story 1</p>
            <div className="additional-content">
              <p>
                Welcome to our community! We are delighted to share the success stories of our members.
                Here, you can find inspiring stories of transformation and success. Our platform is dedicated
                to fostering growth, learning, and achievement. Join us in celebrating these accomplishments and
                be inspired to reach your own goals!
              </p>
            </div>
          </div>
          <div>
            <img src={success_pic2} alt="Success Story 2" />
            <p className="legend">Success Story 2</p>
            <div className="additional-content">
              <p>
                Feel free to share your own experiences and be part of this journey. Together, we can achieve
                great things and support each other in our endeavors. Thank you for being a part of our community.
              </p>
            </div>
          </div>
          <div>
            <img src={success_pic3} alt="Success Story 3" />
            <p className="legend">Success Story 3</p>
            <div className="additional-content">
              <p>
                Our members have shown remarkable progress and have inspiring stories to tell. We are proud of
                each one of them and their dedication to their goals. Keep pushing forward and never give up!
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  </div>
    
  );
};

export default Success;