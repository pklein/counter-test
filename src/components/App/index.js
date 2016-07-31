"use strict";

import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CounterList from '../counter/list';
import countersApp from '../../reducers';

let store = createStore(countersApp);

module.exports = React.createClass({
  displayName: 'App',

  render: function() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1 className="App__header">Counter App</h1>
          <CounterList/>
        </div>
      </Provider>
    );
  },
});
