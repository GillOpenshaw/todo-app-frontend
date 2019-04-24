import React, { Component } from "react";

class AddToDoItems extends Component {
  render() {
    return (
      <div>
        <h4 className="text-center bg-primary text-white">Build your itinerary here:</h4>
        <form>
          <label className="font-weight-bold">Add a new travel task:</label>
          <input type="text" />
          <button className="btn btn-primary btn-sm m-2">Add</button>
          <p className="font-weight-bold">Click Done when task is complete</p>
        </form>
      </div>
    );
  }
}

export default AddToDoItems;
