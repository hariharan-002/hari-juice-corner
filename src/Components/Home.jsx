import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../Components/Assets/Screenshot 2024-05-14 140942.png';
import image2 from '../Components/Assets/Screenshot 2024-05-14 141803.png';


const Home = () => {
  return (
    <>
      <Carousel >
        {/* <Carousel.Item>
          <img src={image1} alt="First slide"  className='carousel-image' />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item>
          <img src={image2} alt="First slide"   className='carousel-image' />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
