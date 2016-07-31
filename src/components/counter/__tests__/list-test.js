"use strict";

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import CounterList from '../list'
import countersApp from '../../../reducers'

describe('CounterList', function() {

  function createComponent(initialState) {
    var store = createStore(countersApp, initialState);
    return renderIntoDocument(<Provider store={store}><CounterList/></Provider>);
  }

  it('should render the Total header', function() {
    var component = createComponent();
    var header = findByTag(component, 'h2');

    expect(header.textContent).to.contain('Total');
  });

  it('should display 0 for the initial total', function() {
    var component = createComponent();
    var total = findByClass(component, 'total');

    expect(total.textContent).to.equal('0');
  });

  it('should display counter name and value', function() {
    var component = createComponent({ total: 4, counters: [{ name: 'test', value: 4, key: 1 }] });
    var total = findByClass(component, 'total');
    expect(total.textContent).to.equal('4');

    var counter = findByClass(component, 'counter');
    expect(counter.textContent).to.equal('test: 4');
  });
});
