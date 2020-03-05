import React, { Component } from "react";

class ClassComponents extends Component {
    render() {
        var style = {
            background: 'rgb(236, 148, 148)',
        };
        return (
            <div className="classComponent_div" style={style}>
                <hr/>
                <h1>Class components!</h1>
                <p>Hello {this.props.name} / {this.props.nickName}, this is Class component</p>                
            </div>
        )
    }
}

export default ClassComponents;