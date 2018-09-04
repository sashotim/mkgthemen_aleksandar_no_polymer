import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyTabs from './MyTabs';
import DysgnathieQuiz from './dysgnathie/DysgnathieQuiz.js'

function Quiz(props) {
  return (
    <Container>
      <DysgnathieQuiz></DysgnathieQuiz>
    </Container>
  );
}

export default Quiz;
