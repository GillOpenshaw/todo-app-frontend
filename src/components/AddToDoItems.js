import React, { Component } from "react";

class AddToDoItems extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Add a new travel task:</label>
          <input type="text" />
          <button type="button">Add</button>
        </form>
      </div>
    );
  }
}

export default AddToDoItems;
