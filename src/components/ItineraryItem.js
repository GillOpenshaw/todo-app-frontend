import React, { Component } from "react";
import moment from "moment";

class ItineraryItem extends Component {

    deleteTaskClicked = () => {
        this.props.deleteTaskFunction(this.props.index);
    }

    doneTaskClicked = () => {
        this.props.doneTaskFunction(this.props.index);
    }

    render() { 

        return (

            <div className="row">

                <div className="col-3">
                    {this.props.taskDate.format("Do-MMMM-YYYY")}
                </div>

                <div className="col-5">
                    {this.props.itemCompleted ?
                        <p className="completed">{this.props.taskDescription}</p>
                        :
                        <p>{this.props.taskDescription}</p>
                    }
                </div>


                <div className="col-2">
                    <button type="button" onClick={this.doneTaskClicked}
                    >Done?</button>
                </div>
                <div className="col-2">
                    <button type="button" onClick={this.deleteTaskClicked}
                    >Delete</button>
                </div>
            </div>
        );
    }
}

export default ItineraryItem;