import React, { Component } from "react";

class Budget extends Component {

    render() {
        // shows the amount spent on the trip
        return (
            <div className="row">

                <div className="col">
                    <h6>Budget Spent</h6>
                </div>
                <div className="col">
                    <h6>{this.props.spent}</h6>
                </div>


            </div>
        );
    }
};

export default Budget;



