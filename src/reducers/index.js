import { ADD_COUNTER } from '../actions'

let nextCounterId = 0;

function countersApp(state = { total: 0, counters: [] }, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return addCounterToState(state, action);
    default:
      return state;
  }
}

function addCounterToState(state, action) {
  return {
    total: state.total,
    counters: state.counters.concat([{ name: action.name, value: 0, key: nextCounterId++ }])
  }
}


export default countersApp
