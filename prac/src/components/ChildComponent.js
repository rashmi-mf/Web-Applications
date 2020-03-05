import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <div>(Click to Communicate from child to parent)</div>
            <button onClick={() => {props.greetHandler('child')}}>I AM FROM CHILD COMPONENT</button>
        </div>
    )
}

export default ChildComponent
