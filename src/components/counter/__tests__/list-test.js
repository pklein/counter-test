"use strict";

describe('CounterList', function() {
  var CounterList = require('../list');
  var component;

  beforeEach(function() {
    component = renderIntoDocument(<CounterList/>);
  });

  it('should render the Total header', function() {
    var header = findByTag(component, 'h2');

    expect(header.textContent).to.contain('Total');
  });
});
