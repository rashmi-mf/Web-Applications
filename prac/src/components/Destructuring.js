import React, { Component } from 'react'

export class Destructuring extends Component {
    render() {
        const {myName, heroName} = this.props;
        //const {state1, state2} = this.state;
        return (
            <div>
                <h1>Welcome, {myName} a.k.a {heroName} </h1>    
            </div>
        )
    }
}