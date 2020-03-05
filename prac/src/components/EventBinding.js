import React, { Component } from 'react'

export class EventBinding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: "Hello"
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            message: "Goodbye!"
        })
        console.log(this);
    }

    fourthHandlerApproach = () => { // ES6 Method declaration syntax 
        this.setState({
            message: "This is Fourth Way!"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click me to see the EventBinding</button> // This is first approach (binding this to click handler) */}
                {/* <button onClick={() => this.clickHandler()}>Click me to see the EventBinding</button> // This is second approach (using arrow function) */}
                <button onClick={this.clickHandler}>Best Way of EventBinding</button> {/*This is third approach (Binding in the class constructor which is suitable to use) */}
                <button onClick={this.fourthHandlerApproach}>Click me to see the EventBinding</button> 
                </div>
        )
    }
}
