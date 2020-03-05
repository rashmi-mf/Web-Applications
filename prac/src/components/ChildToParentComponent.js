import React, { Component } from 'react'
import ChildComponent from "./ChildComponent";

class ChildToParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            parentName: 'Parent' 
        }
        this.greetParent = this.greetParent.bind(this);
    }
    
    greetParent(childName) {
        // alert ("Hello" + this.state.parentName);
        alert (`Hello ${this.state.parentName} from ${childName}`) //feature in ES6 - Template Literals
    }


    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
                {/*We are passing as a reference to the greetParent method as a prop called greetHandler*/}
            </div>
        )
    }
}

export default ChildToParentComponent
