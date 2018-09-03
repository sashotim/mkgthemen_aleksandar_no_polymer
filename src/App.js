import React, { Component } from 'react';

import MyNavbar from './components/MyNavbar';
import subjects from './subjects';
import Grundlagen from './components/Grundlagen';
import Galerie from './components/Galerie';
import Quiz from './components/Quiz';
import Lernziele from './components/Lernziele';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      chosenSubjectIndex: 0,
      chosenPage: 'Grundlagen'
    };
  }
  changeChosenSubjectIndexHandler = (e) => {
    this.setState({
      chosenSubjectIndex: e.target.id
    });
    e.target.parentNode.childNodes.forEach(node => node.classList.remove("active"));
    e.target.classList.add("active");
  }
  changePageHandler = (e) => {
    this.setState({
      chosenPage: e.target.innerText
    });
  }

  render() {
    let componentForChosenPage;
    switch (this.state.chosenPage) {
      case 'Grundlagen':
        componentForChosenPage = <Grundlagen subjects={subjects.subjects} chosenSubjectIndex={this.state.chosenSubjectIndex}></Grundlagen>;
        break;
      case 'Galerie':
        componentForChosenPage = <Galerie></Galerie>;
        break;
      case 'Quiz':
        componentForChosenPage = <Quiz></Quiz>;
        break;
      case 'Lernziele':
        componentForChosenPage = <Lernziele chosenSubjectIndex={this.state.chosenSubjectIndex}></Lernziele>;
        break;
      default:
        componentForChosenPage = <Grundlagen subjects={subjects.subjects} chosenSubjectIndex={this.state.chosenSubjectIndex}></Grundlagen>;
    }
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <MyNavbar subjects={subjects.subjects}
                    chosenSubject={subjects.subjects[this.state.chosenSubjectIndex]}
                    changeSubjectIndex={this.changeChosenSubjectIndexHandler}
                    changePage={this.changePageHandler}></MyNavbar>
        {/* </header> */}
        {componentForChosenPage}
      </div>
    );
  }
}

export default App;
