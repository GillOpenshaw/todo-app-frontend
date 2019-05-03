import React, { Component } from "react";

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

                <div className="col-2">
                    {this.props.taskMonth}
                </div>

                <div className="col-1">
                    {this.props.taskDay}
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