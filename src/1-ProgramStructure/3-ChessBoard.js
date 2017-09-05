/*
Print a chess board into a string, given a size (8 initial)
*/

const generateSpace = () => ' ';

const generateHash = () => '#';

const generateLineBreak = () => '\n';

const isEven = number => !!((number % 2));

const generateLine = (size, isLineEven) => {
  let line = '';
  let characterCount;
  for (characterCount = 1; characterCount <= size; characterCount += 1) {
    if (isEven(characterCount)) {
      line += (isLineEven)
              ? generateHash()
              : generateSpace();
    } else {
      line += (isLineEven)
              ? generateSpace()
              : generateHash();
    }
  }
  line += generateLineBreak();
  return line;
};

const printChessBoard = (size) => {
  let board = '';
  let lineCount;
  for (lineCount = 1; lineCount <= size; lineCount += 1) {
    board += generateLine(size, isEven(lineCount));
  }
  console.log(board);
  return true;
};

export default printChessBoard;
