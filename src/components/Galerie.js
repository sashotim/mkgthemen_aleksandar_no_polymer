import React from 'react';
import Dysgnathie from './dysgnathie/Dysgnathie';
import { Container, Row, Col } from 'reactstrap';
import MyImageCard from './MyImageCard';

function Galerie(props) {
  return (
    <Container>
    <Row >
      <Col sm="4">
        <MyImageCard></MyImageCard>
      </Col>
      <Col sm="4">
        <MyImageCard></MyImageCard>
      </Col>
      <Col sm="4">
        <MyImageCard></MyImageCard>
      </Col>

    </Row>
  </Container>);
}

export default Galerie;
