// -- dependencies --
import { assert } from 'chai';
// -- app --
import motherChildAgeDiff from '../../src/4-HighOrderFunctions/2-MotherChild';
import { average } from '../../src/4-HighOrderFunctions/2-MotherChild';

describe('4-HighOrderFunctions/2-MotherChild', () => {
  it('average', () => {
    assert(average([1,2,3,4]) === 2.5);
  });
  it('motherChildAgeDiff', () => {
    assert(motherChildAgeDiff() == 31.22222222222222);
  });
});
