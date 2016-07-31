"use strict";

import { connect } from 'react-redux';
import React, { Component } from 'react';

class CounterList extends Component {

  render() {
    return (
      <div className="counter-list">
        <h2>Total: <span className="total">{this.props.total}</span></h2>
        <div className="counters">
        </div>
        <div className="add-counter">
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.total,
    counters: state.counters
  }
}

export default connect(mapStateToProps)(CounterList);
