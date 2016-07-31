import _ from 'lodash';

import { ADD_COUNTER, INCREMENT, DECREMENT } from '../actions';

let lastCounterId = 0;

function countersApp(state = { total: 0, counters: {} }, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return addCounterToState(state, action);
    case INCREMENT:
      return incrementCounter(state, action);
    case DECREMENT:
      return decrementCounter(state, action);
    default:
      return state;
  }
}

function addCounterToState(state, action) {
  var newId = ++lastCounterId;
  var newCounters = _.assign({}, state.counters);
  newCounters[newId] = { id: newId, name: action.name, value: 0 };
  return {
    total: state.total,
    counters: newCounters
  }
}

function incrementCounter(state, action) {
  return newStateWithCounterValue(state, action.id, state.counters[action.id].value + 1);
}

function decrementCounter(state, action) {
  return newStateWithCounterValue(state, action.id, state.counters[action.id].value - 1);
}

function newStateWithCounterValue(state, id, value) {
  var newCounters = _.assign({}, state.counters);
  var counter = _.assign({}, state.counters[id], { value: value });
  newCounters[id] = counter;
  return {
    total: calculateTotal(newCounters),
    counters: newCounters
  };
}

function calculateTotal(counters) {
  return _.reduce(_.map(counters, 'value'), _.add, 0);
}

export default countersApp
