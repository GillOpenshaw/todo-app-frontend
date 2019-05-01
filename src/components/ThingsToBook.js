import React, { Component } from "react";
import VirginTrain from "./VirginTrain.jpg";
import LondonUndergroundSign from "./LondonUndergroundSign.jpg";
import HotelPremierInn from "./HotelPremierInn.jpg";
import LionKing from "./LionKing.jpg";
import SkyGarden from "./SkyGarden.jpg";
import KidsWeek from "./KidsWeek.jpg";
import BuckinghamPalace from "./BuckinghamPalace.jpg";
import CamdenMarket from "./CamdenMarket.jpg";
import LondonCoventGarden from "./LondonCoventGarden.jpg";

class ThingsToBook extends Component {

    render() {
        return (
            <div>

                <p><h4 className="text-center text-danger">Explore Ideas For Your Trip</h4></p>

                <table class="table table-sm">

                    <tbody>
                        <tr>
                            <td><h5 className="text-center font-weight-bold text-primary">Travel To London</h5></td>
                            <td><h5 className="text-center font-weight-bold text-primary">Travel Around London</h5></td>
                            <td><h5 className="text-center font-weight-bold text-primary">Hotel and B&B Deals</h5></td>
                        </tr>
                        <tr>
                            <td className="text-center"><h6> <img src={VirginTrain} alt="Virgin Train" /> </h6></td>
                            <td className="text-center"><h6> <img src={LondonUndergroundSign} alt="London Underground Sign" /></h6></td>
                            <td className="text-center"><h6> <img src={HotelPremierInn} alt="Premier Inn Hotel" /> </h6></td>    
                        </tr>
                        <tr>
                            <tr><p></p></tr>
                        </tr>
                        <tr>
                            <td><h5 className="text-center font-weight-bold text-primary">Kids Week Tickets</h5></td>
                            <td><h5 className="text-center font-weight-bold text-primary">Discounted Theatre Tickets</h5></td>
                            <td><h5 className="text-center font-weight-bold text-primary">Food, Drink and Ice Cream</h5></td>
                        </tr>
                        <tr>
                            <td className="text-center"><img src={KidsWeek} alt="Kids Week theatre" /></td>
                            <td className="text-center"><img src={LionKing} alt="Lion King theatre" /></td>
                            <td className="text-center"><img src={LondonCoventGarden} alt="London Covent Garden" /></td>
                        </tr>
                        <tr>
                            <tr><p></p></tr>
                        </tr>
                        <tr>
                            <td><h5 className="text-center font-weight-bold text-primary">London Sightseeing</h5></td>
                            <td><h5 className="text-center font-weight-bold text-primary">Attractions and Walking Tours</h5></td>
                            <td><h5 className="text-center font-weight-bold text-primary">Shopping and Markets</h5></td>
                        </tr>
                        <tr>
                            <td className="text-center"><img src={SkyGarden} alt="SkyGarden" /></td>
                            <td className="text-center"><img src={BuckinghamPalace} alt="Buckingham Palace" /></td>
                            <td className="text-center"><img src={CamdenMarket} alt="CamdenMarket" /></td>
                        </tr>
                    </tbody>

                </table>

            </div>
        );
    }
}

export default ThingsToBook;
