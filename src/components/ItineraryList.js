import React, { Component } from "react";

class ItineraryList extends Component {

    deleteTaskClicked = () => {
        this.props.deleteTaskFunction(this.props.index);
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