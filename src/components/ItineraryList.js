import React, { Component } from "react";

class ItineraryList extends Component {

    deleteTaskClicked = () => {
        this.props.deleteTaskFunction(this.props.index);
    }

    doneTaskClicked = () => {
        this.props.doneTaskFunction(this.state.taskDescription);
    }

    render() {

        return (

            <div className="row">

                <div>
                    {this.props.taskMonth}
                    {this.props.taskDescription}
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