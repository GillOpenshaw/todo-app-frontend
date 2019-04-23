import React, { Component } from "react";
import Globe from "./Globe.jpg";

class Header extends Component {
    render() {
        return (
            <div>
                <h1>My London Travel Wizard</h1>
                <img src={Globe} alt="Globe" /> 
            </div>
        );
    }
}
export default Header;

