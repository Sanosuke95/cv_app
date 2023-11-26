import React, { Component } from "react";

class Button extends Component {
    render() {
        return (
            <>
                <button
                    style={this.props.style}
                    onClick={this.props.click}
                    type={this.props.type}
                    className={this.props.className}
                >
                    {this.props.children}
                </button>
            </>
        );
    }
}

export default Button;
