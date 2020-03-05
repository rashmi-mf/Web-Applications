import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    
    incrementHandler() {
        this.setState({
            count: this.state.count + 1
        },
        () => {
            console.log("Callback value: ",this.state.count); // This is done, whenever you need to get the value of state after the state is actually modified
        })
        console.log(this.state.count);// This is done, whenever you need to get the value of state before the state is actually modified
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementHandler()}>Increament</button>
            </div>
        )
    }
}

export default Counter
