import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/randomLogo.png';
import { scroller } from 'react-scroll';




class Header extends Component {
  state = {
    headerShow: false,
    active: false,
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      })
    } else {
      this.setState({
        headerShow: false
      })
    }
  }


  render() {
    return (
      <Navbar fixed="top" style={{
        backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent'
      }}>
        <Navbar.Brand href="#home"><img src={logo} style={{ width: "10%" }} /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Item>
            <Nav.Link style={navColor}
              onClick={function (event) { scrollToElement('Home') }}>Home</Nav.Link>

          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={navColor} onClick={() => scrollToElement('About')}>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={navColor} onClick={() => scrollToElement('Services')}>Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={navColor} onClick={() => scrollToElement('Packages')}>Packages</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={navColor} onClick={() => scrollToElement('Contact')}>Contact</Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}
const scrollToElement = (element) => {
  scroller.scrollTo(element, {
    duration: 1000,
    delay: 100,
    smooth: true,
    offset: -150
  });
}


const navColor = {
  color: 'white',
}
export default Header;