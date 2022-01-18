import React from 'react';
import Nav from './Nav';

const Quotes = () => (
  <main>
    <Nav />
    <section>
      <h1 className="quote">Qoute of the day</h1>
      <p className="quote-msg">
        Mathematics is not about numbers, equations, computations or algorithm:
        It is about understanding.
        <br />
        **-William Paul Thurston-**
      </p>
    </section>
  </main>
);

export default Quotes;
