import React from "react";
import './oldcontact.css'

function ListItem(props) {
    return (
        <li className="list-group-item" >
            {props.name} : {props.number}
            <span className="float-end badge bg-info">Family</span>
        </li>
    )
}

export default ListItem