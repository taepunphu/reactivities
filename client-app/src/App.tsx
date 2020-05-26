import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    values: []
  }

  componentDidMount(){
    this.setState({
      values: [{id: 1, name: 'Value 101'}, {id: 1, name: 'Value 102'}]
    })
  }

  render (){
    return (
      <div className="App">
        <ul>
          {this.state.values.map((test: any) => (
            <li>{test.name}</li>
          ))}
        </ul>
      </div>
    );
  }

}

export default App;
