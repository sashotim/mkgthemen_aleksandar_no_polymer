import React, { Component } from 'react';
import Grundlagen from './components/Grundlagen'
import MyNavbar from './components/MyNavbar';
import {subjects} from './subjects';
// import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <MyNavbar subjects={subjects} selectedSubject={subjects[0]}></MyNavbar>
        {/* </header> */}
        <Grundlagen subjects={subjects}></Grundlagen>
      </div>
    );
  }
}

export default App;
