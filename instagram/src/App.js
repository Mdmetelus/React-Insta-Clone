import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DummmyData from './dummy-data';
// import animals from './animalsData';
import SearchBarBox from './components/SearchBar/SearchBarBox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      animals: DummmyData,
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <SearchBarBox />
      </div>
    );
  }
}

export default App;