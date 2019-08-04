import React from "react";
import Description from "./Description";
import Container from 'react-bootstrap/Container'
import profile from "../images/profile.jpg";
import Row from 'react-bootstrap/Row';



const About = () => {
  return (
    <div style={aboutStyles} >
      <Container style={imgposition} >
        <img style={img} src={profile} />

      </Container>
      <Container >
        <h1 style={title} >LUKE HARRIS PERSONAL TRAINER </h1>
        <Description />
      </Container>
      <div className="about_black">
        <Container>
          {/* <h5 className="quote"> “If you want somesthing you’ve never had, you must be willing to do something you’ve never done.” </h5> */}
          {/* <p className="About" >Are you ready for change?</p> */}
        </Container>
      </div>
    </div>

  );
};

const aboutStyles = {
  backgroundColor: 'rgb(178,34,34)',
  padding: '60px',
}
const title = {
  textAlign: 'center',
  paddingTop: '20px',
  color: 'white',
}
const imgposition = {
  textAlign: 'center',

}
const img = {
  borderRadius: '50%',
  width: '30%',
  height: '30%',
  border: '9px solid white',


}
export default About;