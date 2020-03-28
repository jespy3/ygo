import React from 'react';

const link = (
  <a
    className="App-link"
    href="https://reactjs.org/docs/introducing-jsx.html"
  >
    React's Getting Started Course (Main Concepts) - Part 2: Introducing JSX
  </a>
);

const element = (
  <div>
    Currently working through {link}
  </div>
);

function ReferenceLine() {
  return(
    element
  );
}

export default ReferenceLine;