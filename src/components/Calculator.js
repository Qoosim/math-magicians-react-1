import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate'; // eslint-disable-line

class Calculator extends React.Component { // eslint-disable-line

  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState((prevState) => ({
      data: calculate(prevState.data, event.target.innerText),
    }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="calc-grid">
        <div className="output-div">
          <div className="output">
            {(data.total ? data.total : '') + (data.operation ? data.operation : '') + (data.next ? data.next : '') || 0}
          </div>
        </div>
        <button type="button" onClick={(event) => this.handleClick(event)}>AC</button>
        <button type="button" onClick={(event) => this.handleClick(event)}>+/-</button>
        <button type="button" onClick={(event) => this.handleClick(event)}>%</button>
        <button type="button" onClick={(event) => this.handleClick(event)} className="operation">÷</button>
        <button type="button" onClick={(event) => this.handleClick(event)}>7</button>
        <button type="button" onClick={(event) => this.handleClick(event)}>8</button>
        <button type="button" onClick={(event) => this.handleClick(event)}>9</button>
        <button type="button" onClick={(event) => this.handleClick(event)} className="operation">x</button>
        <button type="button" onClick={(event) => this.handleClick(event)}>4</button>
        <button type="button" onClick={(event) => this.handleClick(event)}>5</button>
        <button type="button" onClick={(event) => this.handleClick(event)}>6</button>
        <button type="button" onClick={(event) => this.handleClick(event)} className="operation">-</button>
        <button type="button" onClick={(event) => this.handleClick(event)}>1</button>
        <button type="button" onClick={(event) => this.handleClick(event)}>2</button>
        <button type="button" onClick={(event) => this.handleClick(event)}>3</button>
        <button type="button" onClick={(event) => this.handleClick(event)} className="operation">+</button>
        <button type="button" onClick={(event) => this.handleClick(event)} className="span-two">0</button>
        <button type="button" onClick={(event) => this.handleClick(event)}>.</button>
        <button type="button" onClick={(event) => this.handleClick(event)} className="operation">=</button>
      </div>
    );
  }
}

export default Calculator;
