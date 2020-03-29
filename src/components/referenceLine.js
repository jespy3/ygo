import React from 'react';

const courseCheckpoint="https://reactjs.org/docs/introducing-jsx.html";
const chapterNumber = 4;
const chapterName = "Components and Props";

function LinkComponent(link) {
  return (
    <a
      className="App-link"
      href={link}
    >
      Chapter {chapterNumber}: {chapterName}
    </a>
  );
}

const element = (
  <div>
    Currently working through React's Getting Started Course (Main Concepts) - {LinkComponent(courseCheckpoint)}
  </div>
);

function ReferenceLine() {
  return(
    element
  );
}

export default ReferenceLine;