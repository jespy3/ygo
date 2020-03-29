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
  "a class constructor() is needed to assign the initial `this.state`",
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
      <Learning learning={learnings[0]}/>
      <Learning learning={learnings[1]}/>
      <Learning learning={learnings[2]}/>
  </div>
  );
}

export default Basic;