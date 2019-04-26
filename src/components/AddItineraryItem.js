import React, { Component } from "react";

class AddToDoItems extends Component {

  render() {

    return (
      <div>
        <h4 className="text-center bg-primary text-white">Build your itinerary here:</h4>
        <form>
          <label className="font-weight-bold">Add a new travel task:</label>
          <input type="text" />
          <button className="btn btn-primary btn-sm m-2"  >Add</button>
        </form>

      </div>
    );
  }
}

export default AddToDoItems;
