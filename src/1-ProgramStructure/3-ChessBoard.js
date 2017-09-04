/*
Print a chess board into a string, given a size (8 initial)
*/

const generateSpace = () => ' ';

const generateHash = () => '#';

const generateLineBreak = () => '\n';

const isEven = number => !!((number % 2));

// 1st, 3rd... line is Odd
const generateOddLine = (size) => {
  let line = '';
  let characterCount;
  for (characterCount = 1; characterCount <= size; characterCount += 1) {
    if (isEven(characterCount)) {
      line += generateSpace();
    } else {
      line += generateHash();
    }
  }
  line += generateLineBreak();
  return line;
};

// 2nd, 4th... line is Even
const generateEvenLine = (size) => {
  let line = '';
  let characterCount;
  for (characterCount = 1; characterCount <= size; characterCount += 1) {
    if (isEven(characterCount)) {
      line += generateHash();
    } else {
      line += generateSpace();
    }
  }
  line += generateLineBreak();
  return line;
};

const printChessBoard = (size) => {
  let board = '';
  let lineCount;
  for (lineCount = 1; lineCount <= size; lineCount += 1) {
    if (isEven(lineCount)) {
      board += generateEvenLine(size);
    } else {
      board += generateOddLine(size);
    }
  }
  console.log(board);
  return true;
};

export default printChessBoard;
