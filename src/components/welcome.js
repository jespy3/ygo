import React from 'react';

const underConstruction = true;

const officialGreeting = "Welcome to my finished website!"
const constructionGreeting = "Welcome! This site under construction."

function getGreeting(underConstruction) {
  if (underConstruction) {
    return constructionGreeting
  } else {
    return officialGreeting
  }
}

const element = (
  <p>
    {getGreeting(underConstruction)}
  </p>
);

function Welcome() {
  return (
    element
  );
}

export default Welcome;