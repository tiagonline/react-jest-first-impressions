import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>Você tem { this.props.count * 2} counters.</h1>
      </div>
    );
  }
}

export default Counter;
