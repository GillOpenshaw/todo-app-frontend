import React, { Component } from "react";
import moment from "moment";
import './AddItineraryItem.css';

class AddItineraryItem extends Component {

  state = {
    taskDescription: "",
    taskDate: "",
    taskPrice: 0
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
    console.log("*******")
    console.log(typeof taskPrice)
    this.setState({
      taskPrice: parseInt(taskPrice)
    });
  }

  addTaskClicked = e => {
    e.preventDefault();
    const newDate = moment(this.state.taskDate);
    const newPrice = this.state.taskPrice
    this.props.addTaskFunction(this.state.taskDescription, newDate, newPrice);

  }

  render() {

    return (
      <div className="row">


        <div>
          <form>
            <label className="col-12 font-weight-bold">Enter a task, estimated price, and date:</label>
            <p></p>
            <label className="col-2 font-weight-bold">Task:</label>
            <input className="col-10" type="text" onChange={this.taskInputBoxChanged} />

            <div>
              <label htmlFor="dateInput" className="col-3 font-weight-bold">Date:</label>
              <input className="col-4" id="dateInput" type="date" onChange={this.taskDateSelected} value={this.state.taskDate} />

              <label className="col-2 font-weight-bold">Price:</label>
              <input className="col-3" type="number" onChange={this.taskPriceSelected} value={this.state.taskPrice} />


              <button className="btn btn-primary btn-sm m-2" onClick={this.addTaskClicked} >Add To Your Itinerary</button>
            </div>

          </form>
        </div>
        <div className="col">

          <div className="row">

            <div className="col-4">
              <button type="button" onClick={this.dateSortClicked}><i className="fas fa-sort-alpha-down dateiconsort"></i><i className="far fa-calendar-alt dateicon"></i></button>
            </div>

            <div className="col-5">
              <button type="button" onClick={this.taskSortClicked}><i className="fas fa-sort-alpha-down dateiconsort"></i><i className="far fa-calendar-check taskbutton"></i></button>
            </div>

            <div className="col-3">
              <button type="button" onClick={this.priceSortClicked}><i className="fas fa-sort-numeric-down poundsignsort"></i> <i className="fas fa-pound-sign poundsign"></i></button>
            </div>

          </div>
        </div>

        <div>
          <div className="row">

            <div className="col-4">
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


      </div>

    );
  }
}

export default AddItineraryItem;
