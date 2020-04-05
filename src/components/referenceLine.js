import React from 'react';

const courseCheckpoint ="https://reactjs.org/docs/conditional-rendering.html";
const chapterNumber = 7;
const chapterName = "Conditional Rendering";

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