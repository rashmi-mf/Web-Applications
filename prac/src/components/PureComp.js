import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("Pure component");
        return (
            <div>
                This is Pure Component
            </div>
        )
    }
}

export default PureComp
