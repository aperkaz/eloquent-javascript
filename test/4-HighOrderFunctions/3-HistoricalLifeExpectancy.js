// -- dependencies --
import { assert } from 'chai';
// -- app --
import { ages } from '../../src/4-HighOrderFunctions/3-HistoricalLifeExpectancy';

describe(('4-HighOrderFunctions/3-HistoricalLifeExpectancy'), () => {
  it('working', () => {
    assert.deepEqual(Object.keys(ages).length, 6);
  });
});
