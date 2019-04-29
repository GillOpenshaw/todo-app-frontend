import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import AddItineraryItem from "./components/AddItineraryItem";
import ItineraryList from "./components/ItineraryList"
import ItineraryTally from "./components/ItineraryTally"
import ThingsToBook from "./components/ThingsToBook"
import Tips from "./components/Tips"

class App extends Component {

  state = {
    tasks: []
  }

  addTask = (taskDescription) => {
    let currentTasks = this.state.tasks;
    currentTasks.push(taskDescription);
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

  render() {

    return (
      <div class="container">

        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>

        <div className="row">

          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="row">
              <AddItineraryItem
                addTaskFunction={this.addTask}
                deleteTaskFunction={this.deleteTask}/>
            </div>

            <div className="row">
              <ItineraryTally taskCount={this.state.tasks.length} />
            </div>

            <div className="row">
              <div className="col">
                {
                  this.state.tasks.map((item, index) => {
                    return <ItineraryList
                      taskDescription={item} key={index}
                      addTask={this.addTask.bind(this)}
                      deleteTask={this.deleteTask.bind(this, index)} />
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
