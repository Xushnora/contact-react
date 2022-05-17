import React from 'react'
import './newcontact.css'

function NewContact (props){
        return (
                <form  className="news-form" onSubmit={props.formSubmit}>
                    <label className="new-title">Name:</label>
                    <input className="news-name" type="text" onChange={props.changeName} required />
                    <label className="new-title">Number:</label>
                    <input className="num-input" type="number" onChange={props.changeNum} required />
                    <label className="new-title">Category:</label>
                    <select className="news-select" onChange={props.changeSelect}>
                        <option id="conFamily" className="category" value="Family">Family</option>
                        <option id="conFriend" value="Friends" >Friends</option>
                        <option id="conColl" value="Collective">Collective</option>
                    </select>
                    <button id="sumbitBtn" type="submit" className="btn btn-primary submit-btn">Submit</button>
                </form>
        )
}

export default NewContact