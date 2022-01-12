import React from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [data, setData] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    setData((prevData) => calculate(prevData, event.target.innerText));
  };

  return (
    <main>
      <nav className="navbar">
        <h1 className="title-text">Math Magicians</h1>
        <ul className="nav-list">
          <li>Home</li>
          <li>Calculator</li>
          <li>Quote</li>
        </ul>
      </nav>
      <section className="cal-section">
        <h3>Let us do some math</h3>
        <div className="calc-grid">
          <div className="output-div">
            <div className="output">
              {
                (data.total ? data.total : '')
                  + (data.operation ? data.operation : '')
                  + (data.next ? data.next : '') || 0
              }
            </div>
          </div>
          <button type="button" onClick={(event) => handleClick(event)}>AC</button>
          <button type="button" onClick={(event) => handleClick(event)}>+/-</button>
          <button type="button" onClick={(event) => handleClick(event)}>%</button>
          <button type="button" onClick={(event) => handleClick(event)} className="operation">÷</button>
          <button type="button" onClick={(event) => handleClick(event)}>7</button>
          <button type="button" onClick={(event) => handleClick(event)}>8</button>
          <button type="button" onClick={(event) => handleClick(event)}>9</button>
          <button type="button" onClick={(event) => handleClick(event)} className="operation">x</button>
          <button type="button" onClick={(event) => handleClick(event)}>4</button>
          <button type="button" onClick={(event) => handleClick(event)}>5</button>
          <button type="button" onClick={(event) => handleClick(event)}>6</button>
          <button type="button" onClick={(event) => handleClick(event)} className="operation">-</button>
          <button type="button" onClick={(event) => handleClick(event)}>1</button>
          <button type="button" onClick={(event) => handleClick(event)}>2</button>
          <button type="button" onClick={(event) => handleClick(event)}>3</button>
          <button type="button" onClick={(event) => handleClick(event)} className="operation">+</button>
          <button type="button" onClick={(event) => handleClick(event)} className="span-two">0</button>
          <button type="button" onClick={(event) => handleClick(event)}>.</button>
          <button type="button" onClick={(event) => handleClick(event)} className="operation">=</button>
        </div>
      </section>
    </main>
  );
}

export default Calculator;
