import React, { Component } from "react";

class AddBudget extends Component {

    totalBudgetInputBox = (event) => {
        const totalBudget = (event.target.value);
        console.log(totalBudget)
        this.setState({
            totalBudget: parseInt(totalBudget)
            
        });
        console.log(typeof(totalBudget))
    }

    render() {

        return (
            <div className="row">
                <h4 className="text-center bg-primary text-white">Build Your Itinerary Here:</h4>
                <form>

                    <label className="col-4 font-weight-bold">Trip Name:</label>
                    <input className="col-8" type="text" onChange={this.tripNameInputBox} />

                    <label className="col-4 font-weight-bold">Total Budget:</label>
                    <input className="col-5" type="number" onChange={this.totalBudgetInputBox} />
                    <button className="btn btn-primary btn-sm col-3" onClick={this.addTaskClicked} >Add Budget</button>
                </form>
            </div>
        );
    }
};

export default AddBudget;