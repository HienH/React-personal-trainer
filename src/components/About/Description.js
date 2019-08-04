import React from 'react';
import profile from "../images/profile.jpg";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import Fade from 'react-reveal/Fade';

const Description = () => {
  return (
    <Container>
      <p style={paragraph}>Hi! Im Luke,

      I'm a fully qualified Cardiff based Personal Trainer and I have worked with various clients, ranging from elite athletes to youth and the general public.

      My experiences includes working with the Cardiff Metropolitan University’s male rugby team and the Newport County Football team (which reached the FA cup semi-finals in 2018),

     where I assisted with gym-based programming during training sessions and have conducted one-on-one rehabilitation and return-to-sport training.

     I am also a coach at Grange ABC Boxing Club, where I working with various levels of ability from complete beginners to British Gold Medalists.

 I have a passion for helping people reach their goals and seeing how their progress over time is in turn reflected in their newfound confidence in themselves and their abilities.
      By training with me you will give yourself a head start in building the foundation needed for a healthy life that will continue to grow even after we have finished our interaction together. If you are looking for a serious adjustment in your life that goes beyond a temporary change in physical appearance then you have found the right person to help, I look forward to sharing my knowledge and experience with you.
      </p>
      <Row>
        <Button style={button} variant="danger"> Find out more</Button>

      </Row>
    </Container>


  );
};

const paragraph = {
  fontFamily: 'Work Sans',
  textAlign: 'center',
  fontSize: '17px',
  color: 'white',
  opacity: '0.8',
}

const button = {
  margin: 'auto',
  fontSize: '20px',


}
export default Description;