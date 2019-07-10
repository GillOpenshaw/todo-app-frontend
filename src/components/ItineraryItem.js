import React, { Component } from "react";
import './ItineraryItem.css';

class ItineraryItem extends Component {

    // uses the map's index to identify which activity to delete
    deleteTaskClicked = () => {
        this.props.deleteTaskFunction(this.props.index);
    }

    // uses the map's index to identify which activity to mark as complete
    doneTaskClicked = () => {
        this.props.doneTaskFunction(this.props.id);
    }

    render() {
        // displays the activities' dates, descriptions, prices with a done? and delete? icon
        return (


            <div className="row">

                <div className="col-3">
                    {this.props.taskDate.format("Do-MM-YY")}
                </div>

                <div className="col-5">
                    {this.props.itemDone ?
                        <p className="completed">{this.props.taskDescription}</p>
                        :
                        <p>{this.props.taskDescription}</p>
                    }
                </div>

                <div className="col-2">
                    <p>{this.props.taskPrice}</p>
                </div>

                <div className="col-1">
                    <button type="button" onClick={this.doneTaskClicked}> <i className="far fa-calendar-check donebutton"></i></button>
                </div>

                <div className="col-1">
                    <button type="button" onClick={this.deleteTaskClicked}> <i className="fas fa-trash deletebutton"></i></button>
                </div>

            </div>
        );
    }
}

export default ItineraryItem;