import React, { Component } from "react";
import moment from "moment";

class AddItineraryItem extends Component {

  state = {
    taskDescription: "",
    taskDate: "",
    taskPrice: ""
  }

  tripNameInputBox = (event) => {
    this.setState({ taskDescription: event.target.value });
  }

  taskInputBoxChanged = (event) => {
    this.setState({ taskDescription: event.target.value });
  }

  taskDateSelected = (event) => {
    const taskDate = event.target.value;
    this.setState({
      taskDate: taskDate
    });
  }

  taskPriceSelected = (event) => {
    const taskPrice = event.target.value;
    this.setState({
      taskPrice: taskPrice
    });
  }

  addTaskClicked = e => {
    e.preventDefault();
    const newDate = moment(this.state.taskDate);
    this.props.addTaskFunction(this.state.taskDescription, newDate, this.state.newPrice);

  }

  render() {

    return (
      <div>

        <div>
          <h4 className="text-center bg-primary text-white">Build Your Itinerary Here:</h4>
          <form>

            <label className="col-4 font-weight-bold">Trip Name:</label>
            <input className="col-8" type="text" onChange={this.tripNameInputBox} />
            <label className="col-4 font-weight-bold">Total Budget:</label>
            <input className="col-8" type="number" onChange={this.totalBudgetInputBox} />

            <p></p>

            <label className="col-12 font-weight-bold">Enter a task, estimated price, and date:</label>
            <label className="col-2 font-weight-bold">Task:</label>
            <input className="col-10" type="text" onChange={this.taskInputBoxChanged} />

            <div>
              <label htmlFor="dateInput" className="col-2 font-weight-bold">Date:</label>
              <input className="col-4" id="dateInput" type="date" onChange={this.taskDateSelected} value={this.state.taskDate} />

              <label className="col-3 font-weight-bold">Price:</label>
              <input className="col-3" type="number" onChange={this.taskPriceSelected} />


              <button className="btn btn-primary btn-sm m-2" onClick={this.addTaskClicked} >Add To Your Itinerary</button>
            </div>

          </form>
        </div>

        <div>
          <h6>Date Task Price Book Done Delete</h6>
        </div>




        <div className="row">

          <div className="col-2">
            <p>{this.props.taskDate}</p>
          </div>
          <div className="col-2">
            <p>{this.props.taskPrice}</p>
          </div>
          <div className="col-6">
            {this.props.itemCompleted ?
              <p className="completed">{this.props.taskDescription}</p>
              :
              <p>{this.props.taskDescription}</p>
            }
          </div>

        </div>
      </div>

    );
  }
}

export default AddItineraryItem;
