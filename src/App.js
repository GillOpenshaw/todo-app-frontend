import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import AddItineraryItem from "./components/AddItineraryItem";
import ItineraryList from "./components/ItineraryList"
import ItineraryTally from "./components/ItineraryTally"
import ThingsToBook from "./components/ThingsToBook"
import Tips from "./components/Tips"

class App extends Component {

  render() {

    const tasks = [
      "Buy train tickets",
      "Book hotel",
      "Buy theatre tickets",
      "Book restaurant",
      "Book Walking Tour"
    ]

    return (
      <div class="container"> {/* Container div */}

        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>

        <div className="row">

          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="row">
              <AddItineraryItem />
            </div>

            <div className="row">
              <p>Task Counter:</p>
              <ItineraryTally />
            </div>

            <div className="row">
              <ItineraryList />
            </div>

            <div className="row">
              <div className="col">
                {
                  tasks.map(function (item, index) {
                    return <ItineraryList taskDescription={item} key=
                      {index} />
                  })
                }
              </div>
            </div>

          </div>

          <div className="col-md-5 col-sm-12 col-xs-12">
            <div className="row margin" >
              <ThingsToBook />
            </div>
          </div>

          <div className="col-md-1 col-sm-12 col-xs-12" >
            <div className="row margin">
              <Tips />
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
