import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import MyNavbar from './components/MyNavbar';
import subjects from './subjects';
import Grundlagen from './components/Grundlagen';
import Galerie from './components/Galerie';
import Quiz from './components/Quiz';
import Lernziele from './components/Lernziele';
import Modal from 'react-modal';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      chosenSubjectIndex: 0,
      chosenPage: 'Grundlagen'
    };
    this.scrollToChapterHandler = this.scrollToChapterHandler.bind(this);
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

  componentWillMount() {
    document.title = 'Lernanwendung MKG Hauptvorlesung'
  }
  scrollToChapterHandler(e) {
    // console.log(e.target.id);
    // // e.preventDefault();
    // document.querySelector("#" + e.target.id).scrollIntoView({
    //   behavior: 'smooth'
    // });
    // // const domNode = ReactDOM.findDOMNode(this.domRef.current)
    // // domNode.scrollIntoView()
  }

  render() {
    if (typeof(window) !== 'undefined') {
    Modal.setAppElement('body')
    }
    let componentForChosenPage;
    switch (this.state.chosenPage) {
      case 'Grundlagen':
        componentForChosenPage = <Grundlagen
                                  subjects={subjects.subjects}
                                  chosenSubjectIndex={this.state.chosenSubjectIndex}
                                  scrollToChapterHandler={this.scrollToChapterHandler}
                                  ></Grundlagen>;
        break;
      case 'Galerie':
        componentForChosenPage = <Galerie chosenSubjectIndex={this.state.chosenSubjectIndex}></Galerie>;
        break;
      case 'Quiz':
        componentForChosenPage = <Quiz chosenSubjectIndex={this.state.chosenSubjectIndex}></Quiz>;
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
                    changePage={this.changePageHandler}
                    chosenPage={this.state.chosenPage}
                    id="navRow"></MyNavbar>
        {/* </header> */}
        <div className="background">
          <div id="contentContainer">
            {componentForChosenPage}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
