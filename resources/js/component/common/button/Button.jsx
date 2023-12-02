import React from "react";

function Button(props) {
    return (
        <button
            style={props.style}
            onClick={props.click}
            type={props.type}
            className={"btn " + props.className}
        >
            {props.children}
        </button>
    );
}

export default Button;
