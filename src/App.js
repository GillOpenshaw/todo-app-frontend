import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import AddItineraryItem from "./components/AddItineraryItem";
import ItineraryList from "./components/ItineraryList";
import ItineraryTally from "./components/ItineraryTally";
import ThingsToBook from "./components/ThingsToBook";
import Tips from "./components/Tips";
import uuid from "uuid/v4";

class App extends Component {

  state = {
    tasks: [
      {task:"Book theatre", completed: false, id: uuid()},
      {task:"Buy train ticket", completed: false, id:uuid()},
      {task:"Book hotel room", completed: false, id:uuid()}
    ]
  }

  addTask = (taskDescription) => {
    const currentTasks = this.state.tasks;
    const newObject = {task:taskDescription, completed: false, id: uuid()}
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

  addMonth = (taskMonth) => {
    let currentMonth = this.state.month;
    currentMonth.push(taskMonth);
    this.setState({
      month: currentMonth
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
                addMonthFunction={this.addMonth}
                addTaskFunction={this.addTask} />
            </div>

            <div className="row">
              <div className="col">
                {
                  this.state.tasks.map((item, index) => {
                    return <ItineraryList
                      taskDescription={item.task} key={index} index={index}
                      addMonth={this.addMonth.bind(this)}
                      addTask={this.addTask.bind(this)}
                      deleteTaskFunction={this.deleteTask.bind(this)} />
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
