import React from "react";

function Input(props) {
    return (
        <input
            type={props.type}
            name={props.name}
            id={props.id}
            className={"form-control " + props.className}
            value={props.value}
            onChange={props.onChange}
        >
            {props.children}
        </input>
    );
}

export default Input;
