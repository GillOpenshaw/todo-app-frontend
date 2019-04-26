import React, { Component } from "react";

class ItineraryList extends Component {

    render() {

        return (
            <div className="row">

                <div>
                    {this.props.taskDescription}
                </div>
                <div>
                    <button type="button">Done</button>
                </div>
                <div>
                    <button type="button">Delete</button>
                </div>

            </div >
        );
    }
}

export default ItineraryList;