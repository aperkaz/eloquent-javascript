// -- dependencies --
import { assert } from 'chai';
// -- app --
import { reverseArray, reverseArrayInPlace } from "../../src/3-Objects/2-ReverseArray";


describe('3-Objects/2-ReverseArray', () => {
  it('should reverse array', () => {
    assert.deepEqual(reverseArray([1,2,3,4,5]),[5,4,3,2,1]);
  });
  it('should reverse array in place', () => {
    assert.deepEqual(reverseArrayInPlace([1,2,3,4,5]),[5,4,3,2,1]);
  });
});
