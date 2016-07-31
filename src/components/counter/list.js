"use strict";

import _ from 'lodash'
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import { addCounter } from '../../actions';
import Counter from './counter';

class CounterList extends Component {

  createCounter(e) {
    e.preventDefault();
    var nameInput = this.refs.name;
    if (nameInput.value.length > 0) {
      this.props.addCounter(nameInput.value);
      nameInput.value = '';
    }
  }

  render() {
    var counters = _.map(this.props.counters, function(counter) {
      return (
        <Counter
          name={counter.name}
          value={counter.value}
          id={counter.id}
          key={counter.id}
        />
      );
    });
    return (
      <div className="counter-list">
        <h2>Total: <span className="total">{this.props.total}</span></h2>
        <ul className="counters">
          {counters}
        </ul>
        <div className="add-counter">
          <span>New Counter</span>
          <input name="name" ref="name" placeholder="Counter Name" />
          <button onClick={this.createCounter.bind(this)}>Do the stuff</button>
        </div>
      </div>
    )
  }
}

CounterList.propTypes = {
  addCounter: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    total: state.total,
    counters: state.counters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCounter: (name) => {
      dispatch(addCounter(name));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);
