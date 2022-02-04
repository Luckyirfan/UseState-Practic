import React, { Component } from 'react';

export default class ClassCounterChaild extends Component {
  render() {
    return <div>
        <h1>Count:{this.props.countValue} Chaild se aara</h1>
    </div>;
  }
}
