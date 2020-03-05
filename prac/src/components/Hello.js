import React from 'react'

const Hello = () => {
    // This JSX Version
    // return (
    //     <div className="div_class">
    //         <h1>Hello Rashmi this is JSX</h1>
    //     </div>
    // )
    //This is Without using JSX
    return React.createElement(
        "div", 
        {id: "div_id", className: "div_class"}, 
        React.createElement(
            "h1", 
            null, 
            React.createElement(
                "i", 
                null, 
                "Hello Rashmi this JSX inside React.createElement"
            )
        )
    )
}

export default Hello;


/*
Class -> className
for -> htmlFor
camelCase -> 
    onclick -> onClick
    tabIndex -> tabIndex
*/