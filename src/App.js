import React, { Component } from 'react';
//import logo from './logo.svg';
// import './App.css';
import AddToDoItems from "./components/AddToDoItems";
import TravelListItems from "./components/TravelListItems";

const toDoListItems = [
  "Train tickets",
  "Accommodation",
  "Theatre tickets",
  "Restaurant",
  "Walking Tour",
  "Sky Garden"
];

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>My London Travel Wizard</h1>
          <h4>Compile your travel itinerary here</h4>
          <ul>
          {toDoListItems.map(function(item) {
            return <TravelListItems task={item} />;
          })}
        </ul>
        <AddToDoItems />
      </div>
    );
  }
}

export default App;
