import { assert } from 'chai';
import isEven from '../../src/2-Functions/2-RecursiveEven';

describe('2-Functions/2-RecursiveEven', () => {
  it('should return 0 even', () => {
    assert(isEven(0));
  });
  it('should return 1 odd', () => {
    assert(!isEven(1));
  });
  it('should return 2 even', () => {
    assert(isEven(2));
  });
  it('should return 10 even', () => {
    assert(isEven(10));
  });
  it('should return 11 odd', () => {
    assert(!isEven(11));
  });
  it('should return -2 even', () => {
    assert(isEven(-2));
  });
});
