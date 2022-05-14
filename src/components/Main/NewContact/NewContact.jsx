import React, { Component } from 'react'
import './newcontact.css'

class NewContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value);
    }

    render () {
        return (
            <div className="new-contact">
                <h2 className='title'>New Contact</h2>
                <form  className="news-form" id="conForm" onSubmit={this.handleSubmit}>
                    <label className="new-title">Name:</label>
                    <input value={this.state.value} onChange={this.handleChange} className="news-name" type="text" required />
                    <label className="new-title">Number:</label>
                    <input id="telNum" className="num-input" type="number" required />
                    <label className="new-title">Category:</label>
                    <input id="conSelect" className="news-name" type="text" list="date" required />
                    <datalist className="news-select" id="date">
                        <option id="conFamily" className="category" value="Family">Family</option>
                        <option id="conFriend" value="Friends" >Friends</option>
                        <option id="conColl" value="Collective">Collective</option>
                    </datalist>
                    <button id="sumbitBtn" type="submit" className="btn btn-primary submit-btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewContact