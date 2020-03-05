import React, { Component } from 'react'
import LifeCycleMountingChildren from './LifeCycleMountingChildren'

class LifeCycleMounting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Rashmi'
        }
        console.log("(1 Mounting)- lifecycle mounting constructor")
    }
    
    changeState = () => {
        this.setState({
            name: 'Updated'
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log("(2 in Mounting & 1 in Updating)- lifecycle mounting getDervivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("(4 in mounting)- lifecycle mounting componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("[2 in Update]- lifecycle Updating shouldComponentUpdate");       
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("[3 in Update] lifecycle Updating getSnapshotBeforeUpdate");       
        return null
    }

    componentDidUpdate() {
        console.log("[5 in Update] lifecycle Updating componentDidUpdate");        
    }

    render() {
        console.log("(3 in Mounting & 4 in Updating)- lifecycle mounting render")
        return (
            <div>
                <div>Life Cycle Mounting</div>
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleMountingChildren />
            </div>
        )
    }
}

export default LifeCycleMounting
