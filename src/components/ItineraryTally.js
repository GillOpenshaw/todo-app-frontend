import React, { Component } from "react";

class ItineraryTally extends Component {

    render() {
        // keeps a tally of the number of activities in the trip's itinerary
        return (
            <div>
                <p>You have {this.props.taskCount} items in your itinerary</p>
            </div>
        );
    }
}

export default ItineraryTally;