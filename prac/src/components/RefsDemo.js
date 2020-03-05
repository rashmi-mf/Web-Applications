import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef(); // 1- Create ref approach [First Approach]
        this.cbRef = null; // Second Approach - call back ref approach, 1st create a property
        this.setCbRef = element => { //b- then create a method
            this.cbRef = element; //c- assign the element to the property
        }
    }

    componentDidMount() {
        console.log(this.inputRef);
        this.inputRef.current.focus(); // 3- third step

        if(this.cbRef) {
            this.cbRef.focus();
        }
    }

    clickHandler = () => {
        let inputValue = this.inputRef.current.value;
        alert(inputValue);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} /> {/*2- add ref attribute*/}
                <input type="text" ref={this.setCbRef} /> {/*2- add callback ref as an attribute*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
