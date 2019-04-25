import React, { Component } from "react";

class TaskDisplay extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.taskDescription}
                </div>
                <div>
                    <button type="button">Done</button>
                </div>
                <div>
                    <button type="button">Delete</button>
                </div>
            </div>
        );
    }
}

export default TaskDisplay;