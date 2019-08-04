import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import boxingImg from "../images/boxingpads.png"
import Container from 'react-bootstrap/Container'



class JumbotronImage extends Component {
  render() {
    return (
      <Jumbotron style={jumboImg}>
        <Container style={header}>
          <div >
            <h1 style={text} >EVERY JOURNEY STARTS SOMEWHERE</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
              </p>

            <p>Book your free consultation today.</p>
            <p>
              <Button variant="danger">Book Now</Button>
            </p>
          </div>
        </Container>
      </Jumbotron>
    );
  }
}

const jumboImg = {
  backgroundImage: `url(${boxingImg})`,
  height: '100vh',
  overflow: 'hidden',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',
  backgroundSize: 'cover',
  position: 'relative',
  margin: '0px'

};

const header = {
  backgroundColor: 'rgb(0,0,0,0.5)',
  width: '55%',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontWeight: 'bold',
  color: 'white',
  marginTop: '13%',
  height: '40%',

}

const text = {
  paddingTop: '30px',
  textAlign: 'center',
  fontSize: '45px',


}


export default JumbotronImage;