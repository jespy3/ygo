import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      passedArg: "Arrrrgg",
    }

    // This binding is needed to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  passingAnArg(someArg) {
    console.log(someArg)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={this.passingAnArg.bind(this, this.state.passedArg)}>
          Pirate's say
        </button>
      </div>
    );
  }
}

export default Toggle;