import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";






const Contact = () => {

  return (
    <div style={background}>
      <Container>
        <h1 style={title} >GET IN TOUCH</h1>
        <Row style={icon}>
          <Col><FaFacebookSquare /></Col>
          <Col><TiSocialInstagram /></Col>
          <Col><MdMailOutline /></Col>
        </Row>
        <div class="footer-copyright text-center py-3">© 2019 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/"> created by Hien </a>
        </div>
      </Container>

    </div >
  );
};

const background = {
  backgroundColor: 'rgb(178,34,34)',
  padding: '60px 0px',

}
const title = {
  textAlign: 'center',
  paddingTop: '20px',
  paddingBottom: '45px',
  color: 'white',
}

const icon = {
  textAlign: 'center',
  fontSize: '60px',
  color: 'white',
  paddingBottom: '80px',
}
export default Contact;