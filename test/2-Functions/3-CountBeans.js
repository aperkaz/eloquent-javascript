import { assert } from 'chai';
import countCharacters from '../../src/2-Functions/3-CountBeans';

describe('2-Functions/3-CountBeans', () => {
  it('should count correct Zs (0)', () => {
    assert(countCharacters('fasdfasdf', 'Z') === 0);
  });
  it('should count correct As (2)', () => {
    assert(countCharacters('AAasdfasdf', 'A') === 2);
  });
  it('should count correct Bs (0)', () => {
    assert(countCharacters('', 'B') === 0);
  });
  it('should count correct Bs (0)', () => {
    assert(countCharacters('bbbbb', 'B') === 0);
  });
  it('should count correct Bs (5)', () => {
    assert(countCharacters('BBaBBaB', 'B') === 5);
  });
  it('should count correct Bs (2)', () => {
    assert(countCharacters('BdafabdfabfB', 'B') === 2);
  });
});
