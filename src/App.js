import React from 'react';
import Calculator from './components/Calculator';
import Home from './components/Home';

class App extends React.Component { // eslint-disable-line
  render() {
    return (
      <>
        <Home />
        <Calculator />
      </>
    );
  }
}

export default App;
