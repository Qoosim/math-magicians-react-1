import React from 'react';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component { // eslint-disable-line
  render() {
    return (
      <div>
        <Home />
        <Calculator />
        <Quote />
      </div>
    );
  }
}

export default App;
