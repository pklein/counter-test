"use strict";

import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  render() {
    return (
      <li className="counter">
        <span>{this.props.name}: {this.props.value}</span>
      </li>
    )
  }
}

Counter.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default Counter
