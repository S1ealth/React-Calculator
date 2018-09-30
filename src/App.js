import React, { Component } from 'react';
import './App.css';

const numbers = [ 1, 2, 3, '*', 4, 5, 6, '/', 7, 8, 9, '-', '.', 0, '=', '+' ]

class Button extends Component {
  render() {
  return (
    <button className="button" value={this.props.value} onClick={this.props.onClick}>{this.props.value}</button>
  )}
}

const regexInput = /\.?\d/
class App extends Component {
  state = {
    input: '',
    result: 0,
    number1: 0,
    number2: 0
  }

  handleClick = (event) => {
    console.log(event.target.value)
    if (event.target.value.match(regexInput)) {
      this.setState({
        input: this.state.input + event.target.value
      })
    }
  }


  render() {
    return (
      <div className="container">
          <h3 className="result">
              {this.state.input}
          </h3>
          {numbers.map(item => 

                        <Button 
                          key={item} 
                          className="button" 
                          value={item} 
                          onClick={this.handleClick}
                        />
          )}
      </div>
    );
  }
}

export default App;
