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

  calculateTotalSpend = () => {
    let totalSpent = 0
    this.state.tasks.forEach(task => {
      console.log(task)
      const taskPrice = task.price
      console.log(taskPrice)

      totalSpent += taskPrice

    })
    return (totalSpent)
  }

  render() {
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
