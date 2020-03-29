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
  </div>
  );
}

export default Basic;