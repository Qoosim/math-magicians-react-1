import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Nav from './components/Nav';

class App extends React.Component { // eslint-disable-line
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="quotes" element={<Quotes />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
