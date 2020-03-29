import React from 'react';

const user = {
  firstName: 'Wandering Traveller',
  lastName: 'The Internet',
};
const name = formatName(user);

function formatName() {
  return user.firstName + ' of ' + user.lastName;
}

function Normal(props) {
  return <p>{props.day} is a day of the week.</p>;
}

const learnings = [
  'all react components must not modify their prop inputs - they should be read-only. This is just a \'rule\' and I am unsure why at the moment. In react, the ability to change a prop over time is saved for a concept called \'state\'',
  "state becomes it's own attribute separate to 'props'",
  "a class constructor() is needed to assign the initial `this.state`. The class should ALWAYS call this base constructor with props",
  "'mounting' allows us to set up a timer whenever the clock is rendered to the DOM for the first time",
  "'unmounting' allows us to clear the timer when the DOM produces by the Clock component is removed. This is to allow React to free up resources used by components when they are destroyed",
  "'componentDidMount' and 'componentWillUnmount()' are called 'lifecycle methods'",
  "the setState() call will call the render() method again",
  "only update state with setState(), never directly (eg. `this.state.comment = \"hello\";`). State is only set directly in the constructor()"
]

function Learning(props) {
  return (
    <p>
      Something I've learned is that {props.learning}.
    </p>
  );
}

function Basic() {
  return(
    <div>
      <p>
        How are you, {name}?
      </p>
      <Normal day="Sunday"/>
      <Normal day="Monday"/>
      <Normal day="Tuesday"/>
      <Normal day="Wednesday"/>
      <Normal day="Thursday"/>
      <Normal day="Friday"/>
      <Normal day="Saturday"/>
      {learnings.map(lesson => <Learning learning={lesson}/>)}
  </div>
  );
}

export default Basic;