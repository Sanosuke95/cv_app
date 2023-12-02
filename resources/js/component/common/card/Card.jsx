import React from "react";

function Card(props) {
    return (
        <div className="card w-50 mx-auto">
            <div className="card-header text-center">
                <h1>{props.title}</h1>
            </div>
            <div className="card-body">{props.children}</div>
        </div>
    );
}

export default Card;
