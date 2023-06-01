import React from "react";

function ButtonComponent(props) {
    return (
        <div className="button" onClick={props.OnClickEvent}>
            {props.name}
        </div>
    );
}

export default ButtonComponent;
