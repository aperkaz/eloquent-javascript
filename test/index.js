import { assert } from 'chai';
import awesomeFunction from '../src/dummyModule';

describe('Play test.', () => {
  it('should test awesome function', () => {
    assert(awesomeFunction(1, 1) === 0, 'Failure');
  });
});
