import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import AddItineraryItem from "./components/AddItineraryItem";
import ItineraryItem from "./components/ItineraryItem";
import ItineraryTally from "./components/ItineraryTally";
import ThingsToBook from "./components/ThingsToBook";
import Tips from "./components/Tips";
import uuid from "uuid/v4";

class App extends Component {

  state = {
    tasks: [
      { month: "8", day: 6, task: "Train to London", done: false, id: uuid() },
      { month: "8", day: 6, task: "Hotel: Euston Travelodge", done: true, id: uuid() },
      { month: "8", day: 7, task: "Theatre: Hamilton", done: false, id: uuid() }
    ]
  }

  addTask = (taskDescription, taskMonth, taskDay) => {
    const currentTasks = this.state.tasks;
    const newObject = { task: taskDescription, done: false, id: uuid(), month: taskMonth, day: taskDay }
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

  doneTask = index => {
    const completedTasks = this.state.tasks.map((item) => {
      if (item.index === index) {
        item.done = true;
      }
      return item
    });
    this.setState({
      tasks: completedTasks
    })
  }

  render() {

    return (
      <div class="container">

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
                      taskMonth={item.month}
                      taskDay={item.day}
                      itemCompleted={item.done} itemMonth={item.month}
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
