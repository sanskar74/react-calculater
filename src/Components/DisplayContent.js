import React from "react";

const DisplayContent = () => {


    return(
        <div>
            <h1>React Calculator</h1>
            <input type="text" placeholder="Num 1"></input>
            <br/>
            <br/>
            <input type="text" placeholder="Num 2"></input>
            <br/>
            <br/>
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
        </div>
    )
}

export default DisplayContent;