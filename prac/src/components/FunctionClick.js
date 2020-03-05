import React from 'react'

//Event Handler is a function and not a function call, So don't leave paranthesis

function FunctionClick() {

    function clickHandler() {
        console.log("functional Event Handler Example -> clicked");
    }
    
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
