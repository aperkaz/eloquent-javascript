// -- dependencies --
import { assert } from 'chai';
// -- app --
import historicalLifeExpectancy from '../../src/4-HighOrderFunctions/3-HistoricalLifeExpectancy';
import {fromCentury} from '../../src/4-HighOrderFunctions/3-HistoricalLifeExpectancy';

describe(('4-HighOrderFunctions/3-HistoricalLifeExpectancy'), () => {
  it('fromCentury, 10 century', () => {
    assert(fromCentury(999) === 10);
  });
  it('fromCentury, 5 century', () => {
    assert(fromCentury(401) === 5);
  });
  it('TODO', () => {
    assert(true);
  });
});
