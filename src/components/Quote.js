import React from 'react';

function Quote() {
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
}

export default Quote;
