import React, { Component } from "react";
import LondonFlagSmall from "./LondonFlagSmall.png";

class Header extends Component {
    render() {
        return (
            <div>
                <p>
                    <h1 style={styles.header}>My <img src={LondonFlagSmall} alt="London Flag" /> Travel Wizard</h1></p>
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

