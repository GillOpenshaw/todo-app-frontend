import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import AddItineraryItem from "./components/AddItineraryItem";
import ItineraryItem from "./components/ItineraryItem";
import ItineraryTally from "./components/ItineraryTally";
import ThingsToBook from "./components/ThingsToBook";
import Tips from "./components/Tips";
import uuid from "uuid/v4";
import moment from 'moment';

class App extends Component {

  state = {
    tasks: [
      { date: moment("04-08-19", "DD-MM-YY"), task: "Train to London", price: 60, done: false, id: uuid() },
      { date: moment("04-08-19", "DD-MM-YY"), task: "Hotel: Euston Travelodge", price: 85, done: true, id: uuid() },
      { date: moment("05-08-19", "DD-MM-YY"), task: "Theatre: Hamilton", price: 80, done: false, id: uuid() }
    ]
  }

  addTask = (taskDescription, taskDate, taskPrice) => {
    const currentTasks = this.state.tasks;
    const newObject = { task: taskDescription, done: false, id: uuid(), date: taskDate, price: taskPrice }
    currentTasks.push(newObject);
    this.setState({
      tasks: currentTasks
    })
  }

  deleteTask = (index) => {
    let updatedTasks = this.state.tasks;
    updatedTasks.splice(index, 1);
    this.setState({
      tasks: updatedTasks
    })
  }

  doneTask = (index) => {
    let existingTasks = this.state.tasks;
    for (let task of existingTasks) {
      if (task.index === index) {
        task.done = true;
      }
    };
    this.setState({
      tasks: existingTasks
    })
  }

  render() {

    return (
      <div className="container">

        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>

        <div className="row">

          <div className="col-md-5 col-sm-12 col-xs-12">
            <div className="row">
              <AddItineraryItem
                addTaskFunction={this.addTask} />
            </div>

            <div className="row">
              <div className="col">
                {
                  this.state.tasks.map((item, index) => {
                    return <ItineraryItem
                      taskDescription={item.task} key={index} index={index}
                      taskDate={item.date}
                      taskPrice={item.price}
                      itemDone={item.done}
                      addTask={this.addTask.bind(this)}
                      deleteTaskFunction={this.deleteTask.bind(this)}
                      doneTaskFunction={this.doneTask.bind(this)}
                    />
                  })
                }

              </div>
            </div>

            <div className="row">
              <ItineraryTally taskCount={this.state.tasks.length} />
            </div>

          </div>

          <div className="col-md-6 col-sm-12 col-xs-12">
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
