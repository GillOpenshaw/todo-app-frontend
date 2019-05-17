import React, { Component } from "react";

class Budget extends Component {

    render() {

        return (
            <div className="row">

                <div className="col 3">
                    <h6>Budget Spent</h6>
                </div>
                <div className="col 3">
                    <h6>{this.props.spent}</h6>
                </div>
                <div className="col 3">
                    <h6>Budget Remaining</h6>
                </div>
                <div className="col 3">
                    <h6>Integer</h6>
                </div>

            </div>
        );
    }
};

export default Budget;



