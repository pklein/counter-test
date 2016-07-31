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
    var component = createComponent({ total: 4, counters: {1: { name: 'test', value: 4, id: 1 }} });
    var total = findByClass(component, 'total');
    expect(total.textContent).to.equal('4');

    var counter = findByClass(component, 'counter-label');
    expect(counter.textContent).to.equal('test: 4');
  });

  it('should display multiple counters', function() {
    var component = createComponent({ total: 4, counters: {1: { name: 'test-1', value: 1, id: 1 }, 2: { name: 'test-2', value: 3, id: 2}} });
    var total = findByClass(component, 'total');
    expect(total.textContent).to.equal('4');

    var counterLabels = scryByClass(component, 'counter-label');
    expect(counterLabels.length).to.equal(2);
    expect(counterLabels[0].textContent).to.equal('test-1: 1');
    expect(counterLabels[1].textContent).to.equal('test-2: 3');
  });

  it('should disable create button when text box is empty', function() {
    var component = createComponent();
    var newCounterName = findByTag(component, 'input');

    newCounterName.value = '';
    Simulate.change(newCounterName);

    var button = findByTag(component, 'button');
    expect(button.disabled).to.equal(true);
  });

  it('should enable create button when text box is not empty', function() {
    var component = createComponent();
    var newCounterName = findByTag(component, 'input');

    newCounterName.value = 'abc';
    Simulate.change(newCounterName);

    var button = findByTag(component, 'button');
    expect(button.disabled).to.equal(false);
  });

  it('should add counter when add counter button is clicked', function() {
    var component = createComponent();
    var newCounterName = findByTag(component, 'input');

    newCounterName.value = 'abc';
    Simulate.change(newCounterName);

    var button = findByTag(component, 'button');
    Simulate.click(button);

    var counter = findByClass(component, 'counter-label');
    expect(counter.textContent).to.equal('abc: 0');
  });
});
