import { assert } from 'chai';
import {arrayToList, listToArray, nth} from '../../src/3-Objects/3-List';

describe('3-Objects/3-List', () => {
  it('should make list from array', () => {
    assert(arrayToList([1,2,3,4]));
  });
  it('should return the propper value for index = 0', () => {
    const list = arrayToList([1,2,3,4]);
    assert(nth(list, 0) === 1);
  });
  it('should return the propper value for index = 3', () => {
    const list = arrayToList([1,2,3,4]);
    assert(nth(list, 2) === 3);
  });
  it('should generate array from list', () => {
    const array = [1,2,3,4];
    const list = arrayToList(array);
    assert.sameMembers(listToArray(list), array);
  });
});
