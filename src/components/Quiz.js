import React from 'react';
import { Container} from 'reactstrap';
import DysgnathieQuiz from './dysgnathie/DysgnathieQuiz.js'

function Quiz(props) {
  return (
    <Container>
      <DysgnathieQuiz></DysgnathieQuiz>
    </Container>
  );
}

export default Quiz;
