import React from 'react';

const courseCheckpoint="https://reactjs.org/docs/introducing-jsx.html";
const chapterNumber = 2;
const chapterName = "Introducing JSX";
const link = (
  <a
    className="App-link"
    href={courseCheckpoint}
  >
    Chapter {chapterNumber}: {chapterName}
  </a>
);

const element = (
  <div>
    Currently working through React's Getting Started Course (Main Concepts) - {link}
  </div>
);

function ReferenceLine() {
  return(
    element
  );
}

export default ReferenceLine;