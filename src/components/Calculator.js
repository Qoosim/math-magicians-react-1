import React from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (value) => {
    setData((prevData) => calculate(prevData, value));
  };

  return (
    <main>
      <section className="cal-section">
        <h3>
          Are you ready to challenge your skill?
          <br />
          Let us do some mathematics.
        </h3>
        <div className="calc-grid">
          <div className="output-div">
            <div className="output" data-testid="output">
              {
                (data.total ? data.total : '')
                  + (data.operation ? data.operation : '')
                  + (data.next ? data.next : '') || 0
              }
            </div>
          </div>
          <button type="button" onClick={() => handleClick('AC')}>AC</button>
          <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
          <button type="button" onClick={() => handleClick('%')}>%</button>
          <button type="button" onClick={() => handleClick('÷')} className="operation">÷</button>
          <button type="button" onClick={() => handleClick('7')}>7</button>
          <button type="button" onClick={() => handleClick('8')}>8</button>
          <button type="button" onClick={() => handleClick('9')}>9</button>
          <button type="button" onClick={() => handleClick('x')} className="operation">x</button>
          <button type="button" onClick={() => handleClick('4')}>4</button>
          <button type="button" onClick={() => handleClick('5')}>5</button>
          <button type="button" onClick={() => handleClick('6')}>6</button>
          <button type="button" onClick={() => handleClick('-')} className="operation">-</button>
          <button type="button" onClick={() => handleClick('1')}>1</button>
          <button type="button" onClick={() => handleClick('2')}>2</button>
          <button type="button" onClick={() => handleClick('3')}>3</button>
          <button type="button" onClick={() => handleClick('+')} className="operation">+</button>
          <button type="button" onClick={() => handleClick('0')} className="span-two">0</button>
          <button type="button" onClick={() => handleClick('.')}>.</button>
          <button type="button" onClick={() => handleClick('=')} className="operation">=</button>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
