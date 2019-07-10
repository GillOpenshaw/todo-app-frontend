import React, { Component } from "react";

class Tips extends Component {

    render() {
        return (
            // suggested tips to enhance the trip
            <div>

                <div>
                    <h4 className="col text-center bg-danger text-white">Top Tips!</h4>
                </div>

                <div>
                    <h6 className="col text-center bg-success text-white">Look out for Kids Week theatre tickets from June 2019</h6>
                </div>

                <div>
                    <h6 className="col text-center bg-info text-white">Cheaper train tickets go on sale approx 12-14 weeks before travel</h6>
                </div>

                <div>
                    <h6 className="col text-center bg-warning text-dark">Get discounted London travel, attraction entry and food with a Family Railcard</h6>
                </div>

            </div>
        );
    }
}

export default Tips;