import React, { Component } from "react";

class AddItineraryItem extends Component {

  state = {
    taskDescription: "",
    taskMonth: "",
    taskDay: ""
  }

  tripNameInputBox = (event) => {
    this.setState({ taskDescription: event.target.value });
  }

  taskInputBoxChanged = (event) => {
    this.setState({ taskDescription: event.target.value });
  }

  taskMonthSelected = (event) => {
    this.setState({ taskMonth: event.target.value });
  }

  taskDaySelected = (event) => {
    this.setState({ taskDay: event.target.value });
  }

  addTaskClicked = e => {
    e.preventDefault();
    this.props.addTaskFunction(this.state.taskDescription, this.state.taskMonth, this.state.taskDay);
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
              <label className="col-2 font-weight-bold">Price:</label>
              <input className="col-3" type="number" onChange={this.taskPrice} />

              <select className="col-4 custom-select custom-select-sm" onChange={this.taskMonthSelected}>
                <option selected>Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>

              <select className=" col-3 custom-select custom-select-sm" onChange={this.taskDaySelected}>
                <option selected>Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>

              <button className="btn btn-primary btn-sm m-2" onClick={this.addTaskClicked} >Add To Your Itinerary</button>
            </div>

          </form>
        </div>

        <div>
          <h6>Date Task Price Book Done Delete</h6>
        </div>




        <div className="row">

          <div className="col-2">
            <p>{this.props.taskMonth}</p>
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
