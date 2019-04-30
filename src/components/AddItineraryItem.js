import React, { Component } from "react";

class AddItineraryItem extends Component {

  state = {
    taskDescription: ""
  }

  addTaskClicked = e => {
    e.preventDefault();
    this.props.addTaskFunction(this.state.taskDescription);
  }

  inputBoxChanged = (event) => {
    this.setState({ taskDescription: event.target.value });
  }

  render() {

    return (
      <div>

        <div>
          <h4 className="text-center bg-primary text-white">Build Your itinerary Here:</h4>
          <form>
            <label className="font-weight-bold">Add a new task:</label>
            <input type="text" onChange={this.inputBoxChanged} />
            <button className="btn btn-primary btn-sm m-2" onClick={this.addTaskClicked} >Add Task</button>
          </form>
        </div>
        <div>
          <h6>Date  Task   Done   Delete</h6>
        </div>



      </div>
    );
  }
}

export default AddItineraryItem;
