import { assert } from 'chai';
import printTriangle from '../../src/1-ProgramStructure/1-LoopingTriangle';

describe('1-ProgramStructure/1-LoopingTriangle', () => {
  it('should print 7 row triangle', () => {
    assert(printTriangle(7), 'true');
  });
});
