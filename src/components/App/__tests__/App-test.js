"use strict";

import CounterList from '../../counter/list'

describe('App', function() {
  var App = require('../index');
  var component;

  beforeEach(function() {
    component = renderIntoDocument(<App/>);
  });

  it('should render the App header', function() {
    var header = findByTag(component, 'h1');

    expect(header.textContent).to.contain('Counter App');
  });

  it('should render the CounterList component', function() {
    var counterList = findByClass(component, 'counter-list');

    expect(counterList.textContent.length).to.be.greaterThan(0);
  });
});
