import React, { Component } from 'react';
// import './App.css';
import AddToDoItems from "./components/AddToDoItems";
import TravelListItems from "./components/TravelListItems";
import Header from "./components/Header";
import ThingsToBook from "./components/ThingsToBook"
import Tips from "./components/Tips"

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

          <div className="row">
            <Header />
          </div>

          <div className="row">

            <div className="col-md-5 col-sm-12 col-xs-12">
              <AddToDoItems />
              <ol>
                {toDoListItems.map(function (item) {
                  return <TravelListItems task={item} />;
                })}
              </ol>
            </div>

            <div className="col-md-6 col-sm-12 col-xs-12" >
              <ThingsToBook />
            </div>

            <div className="col-md-1 col-sm-12 col-xs-12" >
              <Tips />
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
