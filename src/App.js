import React, { Component } from 'react';
import './App.css';

const numbers = [ '(', ')', '**', 'del', 7, 8, 9, '*', 4, 5, 6, '/', 1, 2, 3,'-', '.', 0, '=', '+']

class Button extends Component {
  render() {
  return (
    <button 
      className="button" 
      value={this.props.value} 
      onClick={this.props.onClick}>
          {this.props.value !== "**" 
            ? this.props.value 
            : "pow"}
    </button>
  )}
}

class App extends Component {
  state = {
    input: '',
    result: 0
  }

  handleClick = (event) => {
    if (event.target.value === "=") {
      this.setState({
        result: eval(this.state.input),
        input: ''
      })

    } else {
      this.setState({
        input: this.state.input + event.target.value
      })
    }
  }


  render() {
    return (
      <div className="container">
          <div className="result">
              <p>Input: {this.state.input}</p>
              <p>Result: {this.state.result}</p>
          </div>
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
