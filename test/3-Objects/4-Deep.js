import {assert} from 'chai';
import deepEqual from '../../src/3-Objects/4-Deep';


describe('3-Objects/4-DeepEqual', () => {
  it('should return equal for same values [10,10]', () => {
    assert(deepEqual(10,10));
  });
  it('should return equal for same values [-10,-10]', () => {
    assert(deepEqual(-10,-10));
  });
  it('should return equal for same values [bbb,bbb]', () => {
    assert(deepEqual('bbb','bbb'));
  });
  it('should return not equal for same values [alain,perkaz]', () => {
    assert(!deepEqual('alain','perkaz'));
  });
  it('should return equal for same values [true,true]', () => {
    assert(deepEqual(true,true));
  });
  it('should return not equal for same values [false,true]', () => {
    assert(!deepEqual(false,true));
  });
  it('should return not equal for different values [-10,10]', () => {
    assert(!deepEqual(-10,10));
  });
  it('should return equal for [null, null]', () => {
    assert(deepEqual(null, null));
  });
  it('should return not equal for [10, null]', () => {
    assert(!deepEqual(10, null));
  });
  it('should return not equal [null, object]', () => {
    assert(!deepEqual(null,{ a: 10}));
  });
  it('should return equal [object1, object1]', () => {
    assert(deepEqual({a:10}, {a:10}));
  });
  it('should return not equal [object1, object2]', () => {
    assert(!deepEqual({a: 10}, {b: 10}));
  });
  it('should return not equal [object1, object2]', () => {
    assert(!deepEqual({a: 10}, {a: 50}));
  });
});
