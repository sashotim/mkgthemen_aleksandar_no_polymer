import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyTabs from './MyTabs';
import DysgnathieLernziele from './dysgnathie/DysgnathieLernziele.js'

function Lernziele(props) {
  return (
    <Container>
      <DysgnathieLernziele></DysgnathieLernziele>
    </Container>);
}

export default Lernziele;
