import React from 'react'

//Normal way to write function
// function Greet() {
//     return <h1>Hello React</h1>
// }

// ES6 way to write function
//export const Greet = (props) => {
const Greet = (props) => { //incase of named export (in this case we need to import this component with same name)
    var style = {
        background: '#efefef',
    };
    return  (
        <div className="functionalComponent_div" style = {style}>
            <h1>Hello {props.name} / {props.nickName}, this is functional component</h1>
            {props.children}    
            <hr/>
        </div>
    )
}

export default Greet // inacase of default export
