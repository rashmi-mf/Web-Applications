import React, { Component } from "react";

class UseState extends Component {

    constructor() {
        super() // This is required because we extents reacts component class and a call has to be made to base class constructor 
        this.state =  {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank You for Subscribing!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default UseState;