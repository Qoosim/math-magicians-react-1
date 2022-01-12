import React from 'react';
import Calculator from './components/Calculator';
import Home from './components/Home';

class App extends React.Component { // eslint-disable-line
  render() {
    return (
      <div>
        <Home />
        <Calculator />
      </div>
    );
  }
}

export default App;
