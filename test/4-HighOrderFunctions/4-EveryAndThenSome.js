// -- dependencies --
import { assert } from 'chai';
// -- app --
import { every, some } from '../../src/4-HighOrderFunctions/4-EveryAndThenSome';

describe('4-HighOrderFunctions/4-EveryAndThenSome', () => {
  const arrayFull = [6,9,7];
  const arrayPartial = [6,4,2];
  const arrayNull = [4,2,4];
  const filterFunction = element => (
    element > 5
  );
  it('every true', () => {
    assert(every(arrayFull, filterFunction));
  });
  it('every false', () => {
    assert(!every(arrayNull, filterFunction));
  });
  it('some true', () => {
    assert(some(arrayPartial, filterFunction))
  });
  it('some false', () => {
    assert(!some(arrayNull, filterFunction));
  });
});
