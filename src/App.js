import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {


    return (
      <div className="container">
        {
          <h1 className="title">
            {this.props.headerText}
          </h1>
        }
      </div>
    );


  }
}

export default App;
