// -- dependencies --
import {assert} from 'chai';
// -- app --
import { rangeFrom, arraySum }from '../../src/3-Objects/1-RangeSum';

describe('3-Objects/1-RangeSum', () => {
  it('should return range', () => {
    assert.sameDeepMembers(rangeFrom(1,4),[1,2,3,4]);
  });
  it('should return range sum', () => {
    assert(arraySum(rangeFrom(1,10)) === 55);
  });
  it('should return range +2', () => {
    assert.sameDeepMembers(rangeFrom(1, 10, 2),[1,3,5,7,9]);
  });
});


