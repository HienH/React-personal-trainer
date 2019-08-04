import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import concentration from '../images/concentration.jpeg';
import equipment from '../images/equipment.jpeg';
import girlboxing from '../images/girlboxing.jpg';
import strength from '../images/strength.jpeg';
import flex from '../images/flex.jpeg'
import nutrients from '../images/nutrients.jpeg'
import gym from '../images/gym.jpeg'
import Container from 'react-bootstrap/Container';


const ImageCollage = () => {
  return (
    <div style={boarder}>
      <h1 style={title}> SPECIALIST AREAS</h1>

      <Container>

        <Row style={row}>

          <Col style={col}>
            <div class="hvrbox">
              <img style={colImg} src={equipment} style={{ width: "100%" }} />
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Strength and conditioning</div>
              </div>
            </div>

            <div class="hvrbox">
              <img style={colImg} src={gym} style={{ width: "100%" }} />
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Sport specific training</div>
              </div>
            </div>

            <div class="hvrbox">
              <img style={colImg} src={girlboxing} style={{ width: "100%" }} />
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Boxing</div>
              </div>
            </div>

          </Col>
          <Col className="column" style={col}>
            <div class="hvrbox">
              <img style={colImg} src={flex} style={{ width: "100%" }} />
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Body fat reduction</div>
              </div>
            </div>


            <div class="hvrbox">
              <img style={colImg} src={strength} style={{ width: "100%" }} />
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Muscle tone and development</div>
              </div>
            </div>
          </Col>

          <Col className="column" style={col}>
            <div class="hvrbox">
              <img style={colImg} src={concentration} style={{ width: "100%" }} />
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Body confidence</div>
              </div>
            </div>

            <div class="hvrbox">
              <img style={colImg} src={nutrients} style={{ width: "100%" }} />
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Nutritional guidance</div>
              </div>
            </div>
          </Col>


        </Row>
      </Container>

    </div>
  );
};

const title = {
  textAlign: 'center',
  paddingTop: '20px',
}

const row = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: ' 40px 4px',

}

const col = {
  flex: '25%',
  maxWidth: '35%',
  padding: '0 0px',
}

const boarder = {
  padding: '60px',
}

const colImg = {
  marginTop: '8px',
  verticalAlign: 'middle',
}

const overlay = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  height: '100%',
  width: '100%',
  opacity: '0',
  transition: '.5s ease',
  backgroundColor: '#008CBA',
}


export default ImageCollage;