import React from "react";

const Builder = (props) => {
    return (
        <div>
            <div>{props.title}</div>
            <button>Add</button>
            <button>Remove</button>
        </div>
    );
};

export default Builder;
