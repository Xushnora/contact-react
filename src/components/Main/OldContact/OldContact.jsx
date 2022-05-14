import React, { Component } from 'react'
import './oldcontact.css'

class OldContact extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="old-contact">
                    <h2 className='title'>Contact</h2>
                    <div className="tabs-box">
                        <div className="btns-box" id="btnGroup">
                            <button id="allBtn" className="btn btn-primary">All</button>
                            <button id="familyBtn" className="btn btn-primary">Family</button>
                            <button id="friendBtn"  className="btn btn-primary">Friends</button>
                            <button id="collBtn"  className="btn btn-primary">Collective</button>
                        </div>
                        <div className="mt-3">
                            <ul className="list-group" id="listGroup">
                                <li className="list-group-item">
                                    Onajonim: 123456789
                                    <span className="float-end badge bg-info">Family</span></li>
                            </ul>
                        </div>
                   </div> 
            </div>
        )
    }
}

export default OldContact