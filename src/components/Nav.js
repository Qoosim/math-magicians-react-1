import React from 'react';
import { Link } from 'react-router-dom';
import '../Nav.css';

const Nav = () => (
  <header>
    <Link to="/" className="text-logo">Math Magicians</Link>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  </header>
);

export default Nav;
