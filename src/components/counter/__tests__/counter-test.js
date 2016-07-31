"use strict";

import { assert } from 'chai';
import { Counter } from '../counter';
import countersApp from '../../../reducers';

describe('Counter', function() {
  var component;
  var incrementFunction;
  var decrementFunction;

  beforeEach(function() {
    incrementFunction = sinon.stub();
    decrementFunction = sinon.stub();
    component = renderIntoDocument(
        <Counter
          name="Bob"
          value={10}
          id={99}
          increment={incrementFunction}
          decrement={decrementFunction}
        />
    );
  });

  it('should render the name and current value', function() {
    var label = findByClass(component, 'counter-label');

    expect(label.textContent).to.equal('Bob: 10');
  });

  it('should trigger increment action', function() {
    var incrementButton = findByClass(component, 'increment');

    Simulate.click(incrementButton);

    assert(incrementFunction.calledWith(99));
  });

  it('should trigger increment action', function() {
    var decrementButton = findByClass(component, 'decrement');

    Simulate.click(decrementButton);

    assert(decrementFunction.calledWith(99));
  });
});
