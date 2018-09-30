import React, { Component } from 'react';
import './App.css';

const numbers = [ 1, 2, 3, '*', 4, 5, 6, '/', 7, 8, 9, '-', '.', 0, '=', '+' ]

function Button(props) {
  return (
    <button className="button" value={props.value}>{props.value}</button>
  )
}


class App extends Component {
  render() {
    return (
      <div className="container">
      <h3 className="result"></h3>
      {numbers.map(item => <Button value={item} />)}
      </div>
    );
  }
}

export default App;
