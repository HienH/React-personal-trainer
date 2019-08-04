import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import weightlift from '../images/muscle.jpeg';
import girlboxing from '../images/girlboxing.jpg';
import equipment from '../images/equipment.jpeg';
import gym from '../images/womanweight.jpeg';
import femaleweight from '../images/weightlifter.jpeg';


const CarouselImages = () => {
  return (
    <Carousel interval='2500' >
      <Carousel.Item>
        <img
          style={imageSize}
          className="d-block w-100 h-80"
          src={weightlift} alt="First slide" />
        <Carousel.Caption>
          <h3> BOOK YOUR FREE 30 MINUTE SESSION </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageSize}
          className="d-block w-100"
          src={girlboxing} alt="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageSize}
          className="d-block w-100"
          src={femaleweight} alt="First slide" />
        src={girlboxing} alt="First slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel >
  );
};

const imageSize = {
  height: '600px',
  backgroundPosition: '50% 50 %',
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',

}
export default CarouselImages;