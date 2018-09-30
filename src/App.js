import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
// math functions
// function multiply(x, y) {
//   return x * y;
// }
function Button(props) {
  return (
    <button
      className='button'
      type='button'
      value={props.value}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.node,
};
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: null, // we are number one. Hey Hey
      number2: null,
      numbers: [],
      actions: '',
      input: '',
      mathAction: null,
      result: null,
    };
  }
  handleMath(value1, value2, action) {
    if (action === '*') {
      return value1 * value2;
    }
  }
  handleClick(e) {
    let value = e.target.value;
    let {number1, number2, input} = this.state;
    if (Number(value) >= 0) {
      if (input === '' && Number(value) === 0) {
        return;
      } else {
        this.setState({
          input: input.concat(e.target.value),
        });
      }
    } else if (value === 'del') {
      this.setState({
        input: '',
        number1: null,
        number2: null,
        mathAction: null,
        result: null,
      });
    } else if (
      value === '*'||value ==='/'||value ==='+'||value === '-'||value === '='
    ) {
      if (number1 === null) {
        this.setState({
          number1: input,
          mathAction: value,
          input: '',
        });
      } else if (number2 === null) {
        this.setState({
          number2: input,
        });
      } else {
        console.log(value);
        return;
      }
    }
  }
  componentWillMount() {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const actionsArr = ['*', '/', '+', '-', '=', 'del'];
    this.setState({
      numbers: numArr.map((number) => {
        return (
          {
            type: 'number',
            value: number,
            action: false,
          }
        );
      }),
      actions: actionsArr.map((action)=> {
        return (
          {
            type: action,
            value: action,
            action: true,
          });
      }),
    });
  }
  componentDidUpdate(prevProps) {
    let {number1, number2, mathAction, result} = this.state;
    if ( number1 !== null && number2 !== null && result === null) {
      this.setState({
        result: this.handleMath(number1, number2, mathAction),
      });
    }
  }
  render() {
    const {numbers, actions, input, result} = this.state;
    const actionBoard = actions.map((action) => {
      return (
        <Button
          key={action.value}
          value={action.value}
          onClick={(action) => this.handleClick(action)}
        />
      );
    });
    const numberBoard = numbers.map((number) => {
      return (
        <Button
          key={number.value}
          value={number.value}
          onClick={(action) => this.handleClick(action)}
        />
      );
    });
    return (
      <div className="container">
        <div className="result">
          <p>Input: {input}</p>
          <p>Result: {result}</p>
        </div>
        {numberBoard}
        {actionBoard}
      </div>
    );
  }
}

export default Calculator;
