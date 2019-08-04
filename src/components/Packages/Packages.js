import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Zoom from 'react-reveal/Zoom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import sportlogo from '../images/insuresport.jpg';


class Packages extends Component {
  state = {
    price: 0,
    price1: 0,
    price2: 0,
    priceend: 50,
    priceend1: 220,
    priceend2: 350,

  }
  prices = () => {
    if (this.state.price < this.state.priceend) {
      this.setState({
        price: this.state.price + 1
      })
    }
    if (this.state.price1 < this.state.priceend1) {
      this.setState({
        price1: this.state.price1 + 1
      })
    }
    if (this.state.price2 < this.state.priceend2) {
      this.setState({
        price2: this.state.price2 + 1
      })
    }

  }

  componentDidUpdate() {
    setTimeout(() => {
      this.prices()
    }, 200);
  }

  render() {
    return (
      <div style={background}>

        <h1 style={title} >PERSONAL TRAINING PACKAGES</h1>
        <Container>
          <Row>
            <Col lg={{ size: 3 }}>
              <Zoom onReveal={() => this.prices()}>

                <Card className="card">
                  <Card.Header style={silver} as="h4">BRONZE</Card.Header>
                  <Card.Body style={centerText}>
                    <Card.Title style={price}> <span>£{this.state.price}</span></Card.Title>
                    <Card.Text>
                      <p>1 personal training session per week for 4 weeks</p>
                    </Card.Text>
                    <Button variant="danger">Sign Up </Button>
                  </Card.Body>
                </Card>

              </Zoom>

            </Col>

            <Col lg={{ size: 3 }} >
              <Zoom >
                <Card>
                  <Card.Header style={silver} as="h4">SILVER</Card.Header>
                  <Card.Body style={centerText}>
                    <Card.Title style={price}> <span>£{this.state.price1}</span></Card.Title>
                    <Card.Text>
                      <p>2 personal training sessions per week for 4 weeks</p>
                    </Card.Text>
                    <Button variant="danger">Sign Up </Button>
                  </Card.Body>
                </Card>
              </Zoom>
            </Col>


            <Col lg={{ size: 3 }} >
              <Zoom >
                <Card >
                  <Card.Header as="h4" style={silver}>GOLD</Card.Header>
                  <Card.Body style={centerText} >
                    <Card.Title style={price}> <span className="cost">£{this.state.price2}</span></Card.Title>
                    <Card.Text>
                      <p>3 personal training sessions per week for 4 weeks</p>
                    </Card.Text>
                    <Button variant="danger">Sign Up</Button>
                  </Card.Body>
                </Card>
              </Zoom>
            </Col>
          </Row>
        </Container>
        <Container style={logo}>
          <img src={sportlogo} />
        </Container>
      </div>

    );
  }
}

const background = {
  // backgroundColor: 'rgb(178,34,34)',
  padding: '60px 0px',
}

const title = {
  textAlign: 'center',
  paddingTop: '20px',
  paddingBottom: '45px',
}
const subtitle = {
  textAlign: 'center',
  backgroundColor: 'rgb(178,34,34)',

}

const bronze = {
  color: '#5A2D00',
  textAlign: 'center',
  backgroundColor: 'rgb(178,34,34)',
  textShadow: '#ffffff 0px 1px 1px',
}

const silver = {
  color: 'white',
  textAlign: 'center',
  backgroundColor: 'rgb(178,34,34)',
  textShadow: '#000 0px px 1px',
}

const gold = {
  color: '#bf9b30',
  textAlign: 'center',
  backgroundColor: 'rgb(178,34,34)',
  textShadow: '#ffffff 0px 1px 1px',
}

const price = {
  textAlign: 'center',
  fontSize: '45px',
}

const centerText = {
  textAlign: 'center',
}

const logo = {
  textAlign: 'center',
  padding: '75px 0px',

}

export default Packages;