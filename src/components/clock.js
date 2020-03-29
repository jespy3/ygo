import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "4.29pm"
    }
  }

  render() {
    return (
      <div>
        <p>The time is {this.state.date}</p>
      </div>
    );
  }
}

export default Clock;