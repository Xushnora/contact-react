import React from "react";
import './layout.css'

export default function Rows(props) {
    return (
        <div className="rows">
            {props.children}
        </div>
    )
}