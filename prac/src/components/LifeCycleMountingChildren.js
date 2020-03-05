import React, { Component } from 'react'

class LifeCycleMountingChildren extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Rashmi'
        }
        console.log("1 Mounting- LifeCycle Children mounting constructor")
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("(2 in Mounting & 1 in Updating)- LifeCycle Children mounting getDervivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("(4 in mounting)- LifeCycle Children mounting componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("[2 in Update]- LifeCycle Children Updating shouldComponentUpdate");       
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("[3 in Update] LifeCycle Children Updating getSnapshotBeforeUpdate");       
        return null
    }

    componentDidUpdate() {
        console.log("[5 in Update] LifeCycle Children Updating componentDidUpdate");        
    }

    render() {
        console.log("(3 in Mounting & 4 in Updating)- LifeCycle Children mounting render")
        return (
            <div>Life Cycle Children Mounting</div>
        )
    }
}

export default LifeCycleMountingChildren
