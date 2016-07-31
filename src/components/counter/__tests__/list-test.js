"use strict";

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import CounterList from '../list'
import countersApp from '../../../reducers'

describe('CounterList', function() {
  var component;

  beforeEach(function() {
    let store = createStore(countersApp);
    component = renderIntoDocument(<Provider store={store}><CounterList/></Provider>);
  });

  it('should render the Total header', function() {
    var header = findByTag(component, 'h2');

    expect(header.textContent).to.contain('Total');
  });

  it('should display 0 for the initial total', function() {
    var total = findByClass(component, 'total');

    expect(total.textContent).to.equal('0');
  });
});
