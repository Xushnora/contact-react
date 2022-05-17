import React from "react";
import './buttons.css'

function Buttons(props) {
    return (
        <div className="btns-box mb-3" id="btnGroup">
            <button id="all" className="btn btn-primary" onClick={props.buttonsChanged}>All</button>
            <button id="family" className="btn btn-primary" onClick={props.buttonsChanged}>Family</button>
            <button id="friend"  className="btn btn-primary" onClick={props.buttonsChanged}>Friends</button>
            <button id="collective"  className="btn btn-primary" onClick={props.buttonsChanged}>Collective</button>
        </div>
    )
}

export default Buttons