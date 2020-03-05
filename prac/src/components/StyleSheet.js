import React from 'react'
import './StyleSheet.css'

function StyleSheet(props) {
    let className = props.primary ? "primary" : "";
    return (
        <div>
            <h1 className={className}>STYLESHEET</h1>
            <h1 className={`${className} font-xl`}>For multiple classes</h1>
        </div>
    )
}

export default StyleSheet
