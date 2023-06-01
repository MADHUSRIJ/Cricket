import React from "react";

function ContentComponent(props){
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.content}</p>
        </div>
    );
}

export default ContentComponent;