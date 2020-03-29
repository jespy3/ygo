import React from 'react';

const user = {
  firstName: 'Wandering Traveller',
  lastName: 'The Internet',
};
const name = formatName(user);
const element = (
  <div>
    <p>
      How are you, {name}?
    </p>
    <Normal day="Sunday"/>
  </div>
);


function formatName() {
  return user.firstName + ' of ' + user.lastName;
}

function Normal(props) {
  return <p>It is {props.day} today.</p>;
}

function Basic() {
  return(
    element
  );
}

export default Basic;