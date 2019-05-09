import React, { Component } from "react";
import './ItineraryItem.css';

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

                <div className="col-4">
                    {this.props.taskDate.format("Do-MMMM-YYYY")}
                </div>

                <div className="col-4">
                    {this.props.itemCompleted ?
                        <p className="completed">{this.props.taskDescription}</p>
                        :
                        <p>{this.props.taskDescription}</p>
                    }
                </div>

                <div className="col-2">
                    <p>{this.props.taskPrice}</p>
                </div>

                <div className="col-1">
                    <button type="button" onClick={this.doneTaskClicked}> <i className="fas fa-check-circle donebutton"></i></button>
                </div>
                <div className="col-1">
                    <button type="button" onClick={this.deleteTaskClicked}> <i className="fas fa-trash deletebutton"></i></button>
                </div>
            </div>
        );
    }
}

export default ItineraryItem;