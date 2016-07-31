"use strict";

import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import { increment, decrement } from '../../actions';

export class Counter extends Component {

  render() {
    return (
      <li className="counter">
        <span className="counter-label">{this.props.name}: {this.props.value}</span>
        <button className="increment" type="button" onClick={this.props.increment.bind(this, this.props.id)}>+</button>
        <button className="decrement" type="button" onClick={this.props.decrement.bind(this, this.props.id)}>-</button>
      </li>
    )
  }
}

Counter.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (name) => {
      dispatch(increment(name));
    },
    decrement: (name) => {
      dispatch(decrement(name));
    }
  };
}

export default connect(null,mapDispatchToProps)(Counter);
