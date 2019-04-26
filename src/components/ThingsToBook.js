import React, { Component } from "react";
import VirginTrain from "./VirginTrain.jpg";
import LondonBus from "./LondonBus.jpg";

class ThingsToBook extends Component {

    render() {
        return (
            <div>

                <p><h4 className="text-center bg-primary text-white">Explore ideas for your trip</h4></p>

                <table class="table table-bordered table-sm">

                    <tbody>
                        <tr>
                            <td><h5 className="text-center font-weight-bold text-primary">Travel</h5></td>
                            <td><h5 className="text-center font-weight-bold text-primary">Accommodation</h5></td>
                        </tr>
                        <tr>
                            <td className="text-center bg-info text-white">To London and Around London</td>
                            <td className="text-center bg-info text-white">Where best to stay</td>
                        </tr>
                        <tr>
                            <td className="text-center"><h6> <img src={VirginTrain} alt="Virgin Train" /> <img src={LondonBus} alt="London Bus" /></h6></td>
                            <td className="text-center">Pic of hotel</td>
                        </tr>
                        <tr>
                            <tr><p></p></tr>
                        </tr>
                        <tr>
                            <td><h5 className="text-center font-weight-bold text-primary">Theatre Tickets</h5></td>
                            <td><h5 className="text-center font-weight-bold text-primary">Food and Drink</h5></td>
                        </tr>
                        <tr>
                            <td className="text-center bg-info text-white">Kids Week and Discounted Tickets</td>
                            <td className="text-center bg-info text-white">Near your hotel or theatre</td>
                        </tr>
                        <tr>
                            <td className="text-center">Pic of theatre</td>
                            <td className="text-center">Pic of ice cream</td>
                        </tr>
                        <tr>
                            <tr><p></p></tr>
                        </tr>
                        <tr>
                            <td><h5 className="text-center font-weight-bold text-primary">Activities</h5></td>
                            <td><h5 className="text-center font-weight-bold text-primary">Shopping</h5></td>
                        </tr>
                        <tr>
                            <td className="text-center bg-info text-white">Attractions, Walking Tours and more!</td>
                            <td className="text-center bg-info text-white">From High Street, to Hamleys, to London Markets</td>
                        </tr>
                        <tr>
                            <td className="text-center">Pic of London Eye</td>
                            <td className="text-center">Pic of Camden Market</td>
                        </tr>
                    </tbody>

                </table>

            </div>
        );
    }
}

export default ThingsToBook;
