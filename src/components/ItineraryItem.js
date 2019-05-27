import React, { Component } from "react";
import './ItineraryItem.css';

class ItineraryItem extends Component {

    deleteTaskClicked = () => {
        this.props.deleteTaskFunction(this.props.index);
    }

    doneTaskClicked = () => {
        this.props.doneTaskFunction(this.props.id);
    }

    render() {

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