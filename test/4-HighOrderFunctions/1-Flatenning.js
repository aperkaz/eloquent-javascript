// -- dependencies --
import { assert } from 'chai';
// -- app --
import flatten from '../../src/4-HighOrderFunctions/1-Flatenning';

describe('4-HighOrderFunctions', () => {
  const original = [[1,2], [3,4]];
  const flattened = [1,2,3,4];
  
  it('should return flattened array', () => {
    assert.deepEqual(flatten(original), flattened);
  });
});
