import React, { Component } from "react";

class Budget extends Component {

    totalBudgetInputBox = (event) => {
        const totalBudget = (event.target.value);
        console.log(totalBudget)
        this.setState({
            totalBudget: totalBudget
        });
    }

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
                    <h6>{this.props.budgetRemaining}</h6>
                </div>

            </div>
        );
    }
};

export default Budget;



