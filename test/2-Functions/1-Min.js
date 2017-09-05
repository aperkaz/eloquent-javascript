import { assert } from 'chai';
import extractMin from '../../src/2-Functions/1-Min';

describe('2-Functions/1-Min', () => {
  it('should return the smallest (1)', () => {
    assert(extractMin(1,3) === 1);
  });
  it('should return the smallest (-1)', () => {
    assert(extractMin(-1,3) === -1);
  });
  it('should return the smallest (-10)', () => {
    assert(extractMin(-9,-10) === -10);
  });
  it('should return the smallest (3)', () => {
    assert(extractMin(3,3) === 3);
  });
});
