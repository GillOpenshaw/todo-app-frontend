import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import AddBudget from "./components/AddBudget";
import AddItineraryItem from "./components/AddItineraryItem";
import ItineraryItem from "./components/ItineraryItem";
import Budget from "./components/Budget";
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
    ],
    totalBudget: 0
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

  calculateBudgetRemaining = () => {
    let budgetRemaining = this.state.totalBudget - this.state.totalSpent
    console.log(typeof budgetRemaining)
    console.log(budgetRemaining)
    return (budgetRemaining)
  }

  calculateTotalSpend = () => {
    let totalSpent = 0
    this.state.tasks.forEach(task => {
      const taskPrice = task.price
      totalSpent += taskPrice
      console.log(totalSpent)
      console.log(typeof totalSpent)
    })
    return (totalSpent)
  }

  render() {
    const totalSpent = this.calculateTotalSpend()
    const budgetLeft = this.calculateBudgetRemaining()
    console.log(typeof budgetLeft)

    return (
      <div className="container">

        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>

        <div className="row-md-6 col-sm-12 col-xs-12">
          <div className="col margin" >
            <ThingsToBook />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <AddBudget />
          </div>
        </div>


        <div className="row">
          <div className="col">
            <AddItineraryItem
              addTaskFunction={this.addTask} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            {
              this.state.tasks.map((item, index) => {
                return <ItineraryItem
                  taskDescription={item.task} key={index} index={index} id={item.id}
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

        <div className="row">
          <div className="col">
            <Budget spent={totalSpent} budgetRemaining={budgetLeft} />
          </div>
        </div>

        <div className="row-md-1 col-sm-12 col-xs-12" >
          <div className="col margin">
            <Tips />
          </div>
        </div>

      </div >
    );
  }
}

export default App;
