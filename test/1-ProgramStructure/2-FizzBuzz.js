import {assert} from 'chai';
import { divisible, fizzBuzz } from '../../src/1-ProgramStructure/2-FizzBuzz';

describe('1-ProgramStructure/2-FizzBuzz/divisible', () => {
  it('should mark divisible 9 from 3', () => {
    assert(divisible(9, 3));
  });
  it('should mark divisible 3 from 3', () => {
    assert(divisible(3, 3));
  });
  it('should mark divisible 5 from 5', () => {
    assert(divisible(5,5));
  });
  it('should mark divisible -3 from 3', () => {
    assert(divisible(-3,3));
  });
  it('should mark divisible 10 from 5', () => {
    assert(divisible(10,5));
  });
  it('should mark non divisible 5 from 3', () => {
    assert(!divisible(5,3));
  });
  it('should mark non divisible 1 from 5', () => {
    assert(!divisible(1,5));
  });
});

describe('1-ProgramStructure/2-FizzBuzz', () => {
  it('should play the game', () => {
    assert(fizzBuzz());
  });
});
