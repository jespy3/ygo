import React from 'react';

const user = {
  firstName: 'wandering',
  lastName: 'traveller',
};
const name = formatName(user);
const element = (
  <p>
    Hello, {name}! How are you?
  </p>
);


function formatName() {
  return user.firstName + ' ' + user.lastName;
}

function Basic() {
  return(
    element
  );
}

export default Basic;