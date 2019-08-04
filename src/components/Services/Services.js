import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Zoom from 'react-reveal/Zoom';
import { FaGraduationCap } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaUniversity } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";

class Price extends Component {


  render() {
    return (
      <div style={boarder}>
        <h1 style={title}> QUALIFICATION</h1>
        <Row style={rowIcon}>
          <Col>
            <p style={icon}><FaGraduationCap /></p>
            <h5> MSc Strength and condition </h5>
          </Col>
          <Col>
            <p style={icon}><IoIosPeople /></p>
            <h5>WABA Boxing Coach</h5>
          </Col>
          <Col>
            <p style={icon}><FaDumbbell /></p>
            <h5>YMCA Level 3 Personal Training</h5>
          </Col>
        </Row>
        <Row style={rowIcon}>
          <Col style={uniIcon}>
            <p style={icon} ><FaUniversity /></p>
            <h5> BSc Sports Conditioning, Rehabilitation and Massage
            <p>(1st Class Honours)</p>
            </h5>
          </Col>
          <Col style={gymIcon}>
            <p style={icon} ><FaChalkboardTeacher /></p>
            <h5>YMCA Level 2 Gym Instructor</h5>
          </Col>

        </Row>
      </div>
    );
  }
}

const title = {
  textAlign: 'center',
  paddingBottom: '20px',

}

const boarder = {
  margin: '120px',
}

const icon = {
  fontSize: '40px',
  color: '#dc3545',
}

const rowIcon = {
  textAlign: 'center',

}
const uniIcon = {
  fontSize: '40px',
  paddingLeft: '100px',
  margin: 'auto',
}

const gymIcon = {
  fontSize: '40px',
  paddingRigt: '100px',
  margin: 'auto',

}
export default Price;