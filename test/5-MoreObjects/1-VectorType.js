import { expect } from 'chai';
import Vector from '../../src/5-MoreObjects/1-VectorType';

describe('5-MoreObjects/1-VectorType', () => {
  const vec = new Vector(3,5);

  it('should create proper object instances', () => {
    expect(vec).to.deep.equal({x: 3, y:5});
  });

  it('should return proper length property', () => {
    expect(vec.length).to.equal(Math.sqrt((3 ** 2) + (5 ** 2)));
  });

  it('should flag incorrect arg in plus operation', () => {
    const foo = 3;
    expect(vec.plus(foo))
      .to.deep.equal('The argument needs to be of Vector type');
  });

  it('should execute plus operation', () => {
    const vector = new Vector(2,2);
    expect(vec.plus(vector)).to.deep.equal({x: 5, y:7});
  });

  it('should flag incorrect arg in minus operation', () => {
    const foo = 3;
    expect(vec.minus(foo))
      .to.deep.equal('The argument needs to be of Vector type');
  });

  it('should execute minus operation', () => {
    const vector = new Vector(2,2);
    expect(vec.minus(vector)).to.deep.equal({x: 1, y:3});
  });
});
