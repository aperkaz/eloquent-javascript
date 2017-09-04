import { assert } from 'chai';
import printChessBoard from '../../src/1-ProgramStructure/3-ChessBoard';

describe('1-ProgramStructure/3-ChessBoard', () => {
  it('should print a correct 4x4 chess board', () => {
    assert(printChessBoard(4));
  });
  it('should print a correct 8x8 chess board', () => {
    assert(printChessBoard(8));
  });
});
