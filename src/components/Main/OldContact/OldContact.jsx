import React from 'react'
import './oldcontact.css'

function OldContact(props) {
        return (
                <div className="card w-100 margin-top-4">
                    <div className="card-body">
                        <span className="float-end badge bg-info">{props.category}</span>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">+998 {props.number}</p>
                        <button className='removeBtn'>X</button>
                    </div>
                </div>
        )
}

export default OldContact