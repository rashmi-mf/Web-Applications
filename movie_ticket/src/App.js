import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      items: ["12","13","15","14","15"],
    }
  }
  
  render() {

    var {items} = this.state;
    var i = 0;

    return (
      <div className="App">
      Data has been Loaded
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            {items.map(item => (
              <tr>
                {items.map(item => (
                  <td style={{border: '1px solid #000', background: '#efefef', width: '20px', height: '20px' }}>{i+1}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
);
  }
}

export default App
