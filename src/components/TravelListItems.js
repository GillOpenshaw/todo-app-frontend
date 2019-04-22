import React, { Component } from "react";

class TravelListItems extends Component {
  render() {
    return (
      <li className="item">
        {this.props.task}
        <button className="btn btn-warning btn-sm m-2">Book</button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
      </li>
    );
  }
}

export default TravelListItems;
