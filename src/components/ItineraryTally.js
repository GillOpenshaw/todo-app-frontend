import React, { Component } from "react";

class ItineraryTally extends Component {

    render() {

        return (
            <div>
                <p>You have {this.props.taskCount} items in your itinerary</p>
            </div>
        );
    }
}

export default ItineraryTally;