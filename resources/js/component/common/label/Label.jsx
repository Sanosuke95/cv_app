import React from "react";

function Label(props) {
    return (
        <label
            htmlFor={props.forInput}
            className={"form-label" + props.className}
        >
            {props.children}
        </label>
    );
}

export default Label;
