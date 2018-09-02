import React from 'react';
import Entzuendungen_abszesse from './entzuendungen_abszesse/Entzuendungen_abszesse'
import MyListGroup from './MyListGroup';
import { Container, Row, Col } from 'reactstrap';

function Grundlagen(props) {
  return (
    <Container>
    <Row >
      <Col sm="4">
        <MyListGroup chapters={props.subjects[1].chapters}></MyListGroup>
      </Col>
      <Col sm="8">
        <Entzuendungen_abszesse></Entzuendungen_abszesse>
      </Col>
    </Row>
  </Container>);
}

export default Grundlagen;
