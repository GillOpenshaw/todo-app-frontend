import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import AddItineraryItem from "./components/AddItineraryItem";
import ItineraryItem from "./components/ItineraryItem";
import Budget from "./components/Budget";
import ItineraryTally from "./components/ItineraryTally";
import ThingsToBook from "./components/ThingsToBook";
import Tips from "./components/Tips";
import uuid from "uuid/v4";
import moment from 'moment';
import axios from "axios";

class App extends Component {

  // a list of all the activity items with their description, date, price, if completed
  state = {
    tasks: [

    ],
  }

  componentWillMount() {
    axios.get('https://1u1aip2nu6.execute-api.eu-west-2.amazonaws.com/dev/tasks/')
      .then(response => {
        console.log(response.data);
        this.setState({ tasks: response.data.tasks });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // updates the state with any new activity descriptions, date and price
  addTask = (taskDescription, taskDate, taskPrice) => {
    console.log(taskDescription)
    const currentTasks = this.state.tasks;
    const newObject = { description: taskDescription, done: false, id: uuid(), date: taskDate, price: taskPrice }
    currentTasks.push(newObject);
    this.setState({
      tasks: currentTasks
    })
  }

  // removes a task from the state if no longer required
  deleteTask = (index) => {
    let updatedTasks = this.state.tasks;
    updatedTasks.splice(index, 1);
    this.setState({
      tasks: updatedTasks
    })
  }

  // updates the state if a task has been completed
  doneTask = (id) => {
    let existingTasks = this.state.tasks;
    for (let task of existingTasks) {
      if (task.id === id) {
        task.done = true;
      }
    };
    this.setState({
      tasks: existingTasks
    })
  }

  // calculates the total spent on all the activities
  calculateTotalSpend = () => {
    let totalSpent = 0
    this.state.tasks.forEach(function (task) {
      const taskPrice = task.price
      totalSpent += taskPrice

    })
    return (totalSpent)
  }

  // returns a table showing the trip's itinerary, a tally of itinerary items and total spend for the trip
  render() {
    //stores the amount from the calculateTotalSpend function 
    const totalSpent = this.calculateTotalSpend()

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
                      taskDescription={item.description} key={index} index={index} id={item.id}
                      taskDate={moment(item.date, "DD-MM-YY")}
                      taskPrice={item.price}
                      itemDone={item.completed}
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

            <div className="row">
              <div className="col">


                <Budget spent={totalSpent} />
              </div>
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