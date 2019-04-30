import React, { Component } from "react";

class ItineraryList extends Component {  

    state = {
        taskDescription: ""
      }

    deleteTaskClicked = (index) => {
        this.props.deleteTaskFunction(this.props.taskDescription);
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