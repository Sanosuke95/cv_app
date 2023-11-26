import React, { Component } from "react";
import Navigation from "./Navigation";

class Layout extends Component {
    render() {
        return (
            <>
                <Navigation />
                <main className="container">{this.props.children}</main>
            </>
        );
    }
}

export default Layout;
