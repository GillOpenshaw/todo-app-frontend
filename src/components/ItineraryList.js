import React, { Component } from "react";

class ItineraryList extends Component {

    deleteTaskClicked = (item, index ) => {
        alert("You have pressed the Delete button");
      }
    

    render() {

        return (

            <div className="row">

                <div>
                    {this.props.taskDescription}
                </div>
                <div>
                    <button type="button">Done</button>
                </div>
                <div>
                    <button type="button" onClick={this.deleteTaskClicked}
                    >Delete</button>
                </div>

            </div>

        );
    }
}

export default ItineraryList;