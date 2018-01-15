import { expect } from 'chai';
import TextCell from '../../src/5-MoreObjects/TextCell';
import StretchCell from '../../src/5-MoreObjects/2-AnotherCell';

describe('5-MoreObjects/2-AnotherCell', () => {
  const tc = new TextCell("abc");
  const sc = new StretchCell(tc, 1, 2);

  it('should construct new instance properly', () => {
    expect(sc.inner.text).to.deep.equal([ 'abc', ' ' ]);
  });

  it('should execute minWidth() correctly', () => {
    expect(sc.minWidth()).to.equal(3);
  });

  it('should execute minHeight() correctly', () => {
    expect(sc.minHeight()).to.equal(2);
  });

  it('should execute draw() correctly', () => {
    expect(sc.draw(3,2)).to.deep.equal([ 'abc', '   ' ]);
  });
});
