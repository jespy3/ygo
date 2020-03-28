import React from 'react';

const user = {
  firstName: 'Wandering Traveller',
  lastName: 'The Internet',
};
const name = formatName(user);
const element = (
  <p>
    How are you, {name}?
  </p>
);


function formatName() {
  return user.firstName + ' of ' + user.lastName;
}

function Basic() {
  return(
    element
  );
}

export default Basic;