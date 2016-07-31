"use strict";

import * as actions from '..'

describe('actions', function() {
  it('should create an action to add a counter', () => {
    var name = 'bob';
    const expectedAction = {
      type: actions.ADD_COUNTER,
      name
    }
    expect(actions.addCounter(name)).to.eql(expectedAction)
  })
});
