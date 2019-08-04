import React from 'react';
import weightlift from '../images/muscle.jpeg';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



const Booking = () => {
  return (
    <Row style={backgroundImage}>
      <div style={text}>
        <h1 > BOOK YOUR FREE 30 MINUTE SESSION </h1>
        <Button variant="danger">Book Now</Button>
      </div>


    </Row>

  );
};

const backgroundImage = {
  height: '550px',
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
  background: `url(${weightlift})`,

  backgroundAttachment: 'fixed',
  backgroundPosition: 'center'
}

const text = {
  textAlign: 'center',
  margin: 'auto',
  color: 'white',
  lineHeight: '51px',
  verticalAlign: 'middle',

}

export default Booking;