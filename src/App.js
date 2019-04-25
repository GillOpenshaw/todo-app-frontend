import React, { Component } from 'react';
import './App.css';
import AddToDoItems from "./components/AddToDoItems";
import Header from "./components/Header";
import ThingsToBook from "./components/ThingsToBook"
import Tips from "./components/Tips"
import TaskDisplay from "./components/TaskDisplay"
import TaskCounter from "./components/TaskCounter"

class App extends Component {

  state = {
    tasks: []
  }

  addTask = (taskDescription) => {
    let currentTasks = this.state.tasks;
    currentTasks.push(taskDescription);
    this.setState({
      tasks: currentTasks
    });
  }

  render() {
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
              <AddToDoItems addTaskFunction={this.addTask} />

            </div>
            <div>
              {
                this.state.tasks.map(function (item, index) {
                  return <TaskDisplay taskDescription={item} key={index} />
                })
              }
            </div>
            <div className="row">
              <TaskCounter taskCount={this.state.tasks.length} />
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
