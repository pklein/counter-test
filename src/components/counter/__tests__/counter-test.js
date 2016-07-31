"use strict";

import { Counter } from '../counter'
import countersApp from '../../../reducers'

describe('Counter', function() {
  var component;

  beforeEach(function() {

    component = renderIntoDocument(
        <Counter
          name="Bob"
          value={10}
          id={99}
          increment={function() {}}
          decrement={function() {}}
        />
    );
  });

  it('should render the name and current value', function() {
    var label = findByClass(component, 'current');

    expect(label.textContent).to.equal('Bob: 10');
  });

});
