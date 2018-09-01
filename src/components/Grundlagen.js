import React from 'react';
import Dysgnathie from './dysgnathie/Dysgnathie'
import MyListGroup from './MyListGroup';
import { Container, Row, Col } from 'reactstrap';

function Grundlagen(props) {
  return (
    <Container>
    <Row >
      <Col sm="4">
        <MyListGroup chapters={props.subjects[0].chapters}></MyListGroup>
      </Col>
      <Col sm="8">
        <Dysgnathie></Dysgnathie>
      </Col>
    </Row>
  </Container>);
}

export default Grundlagen;
