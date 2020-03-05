import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComp'

class ParentForPureComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Rashmi'
        }
    }
    
    componentDidMount() {
        setInterval( () => {
            this.setState({
                name: 'Rashmi'
            })
        }, 2000)
    }

    render() {
        console.log("+++++++++++++++++++Parent Component+++++++++++++++++++++++");
        return (
            <div>
                Parent of pure and Regular Component
                <RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentForPureComponent
