import React, { Component } from "react";
import LondonFlagSmall from "./LondonFlagSmall.png";

class Header extends Component {

    render() {

        return (
            <div>
                <h1 style={styles.header}>My <img src={LondonFlagSmall} alt="London Flag" /> Travel Wizard</h1>
            </div>
        );
    }
}

const styles = {
    header: {
        color: "blue",
        textAlign: "center"
    }
};

export default Header;

