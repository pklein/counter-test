import countersApp from '..'
import * as actions from '../../actions'

describe('counters app reducer', () => {
  it('should return the initial state', () => {
    expect(
      countersApp(undefined, {})
    ).to.eql(
      {
        total: 0,
        counters: {}
      }
    )
  });

  it('should handle ADD_COUNTER', () => {
    expect(
      countersApp(undefined, {
        type: actions.ADD_COUNTER,
        name: 'Bob'
      })
    ).to.eql(
      {
        total: 0,
        counters: {
          1: { id: 1, name: 'Bob', value: 0 }
        }
      }
    );
  });

  it('should handle INCREMENT', () => {
    expect(
      countersApp(
        {
          total: 10,
          counters: {
            1: { id: 1, name: 'Bob', value: 8 },
            2: { id: 2, name: 'Bill', value: 2 }
          }
        }, {
          type: actions.INCREMENT,
          id: 1
      })
    ).to.eql(
      {
        total: 11,
        counters: {
          1: { id: 1, name: 'Bob', value: 9 },
          2: { id: 2, name: 'Bill', value: 2 }
        }
      }
    );
  });
  it('should handle DECREMENT', () => {
    expect(
      countersApp(
        {
          total: 10,
          counters: {
            1: { id: 1, name: 'Bob', value: 8 },
            2: { id: 2, name: 'Bill', value: 2 }
          }
        }, {
          type: actions.DECREMENT,
          id: 2
      })
    ).to.eql(
      {
        total: 9,
        counters: {
          1: { id: 1, name: 'Bob', value: 8 },
          2: { id: 2, name: 'Bill', value: 1 }
        }
      }
    );
  });
});
