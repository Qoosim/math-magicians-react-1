import React from 'react';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

class App extends React.Component { // eslint-disable-line
  render() {
    return (
      <>
        <Quotes />
        <Home />
        <Calculator />
      </>
    );
  }
}

export default App;
