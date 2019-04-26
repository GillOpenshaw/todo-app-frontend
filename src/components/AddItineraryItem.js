import React, { Component } from "react";

class AddToDoItems extends Component {

  State = {
    taskDescription: ""
  }

  addTaskClicked = () => {
    this.props.addTaskFunction(this.state.taskDescription);
  }

  inputBoxChanged = (event) => {
    this.setState({ taskDescription: event.target.value });
  }

  render() {

    return (
      <div>
        <h4 className="text-center bg-primary text-white">Build your itinerary here:</h4>
        <form>
          <label className="font-weight-bold">Add a new travel task:</label>
          <input type="text" onChange={this.inputBoxChanged} />
          <button className="btn btn-primary btn-sm m-2" onClick={this.addTaskClicked} >Add Task</button>
        </form>

      </div>
    );
  }
}

export default AddToDoItems;
