import React, { Component } from 'react';
//import logo from './logo.svg';
// import './App.css';
import AddToDoItems from "./components/AddToDoItems";
import TravelListItems from "./components/TravelListItems";
import Header from "./components/Header";

const toDoListItems = [
  "Travel tickets",
  "Accommodation",
  "Theatre tickets",
  "Restaurant",
  "Walking Tour",
  "Sky Garden"
];

class App extends Component {
  render() {
    return (
      <div class="container"> {/* Container div */}

        <div className="App"> {/* App div */}

          <Header />

          <h4>Build your own travel itinerary here:</h4>

          <AddToDoItems />

          <ol>
            {toDoListItems.map(function (item) {
              return <TravelListItems task={item} />;
            })}
          </ol>

        </div> {/* End App div */}

      </div>
    );
  }
}

export default App;
