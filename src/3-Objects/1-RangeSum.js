/* eslint-disable */
export const rangeFrom = (start, end, increment = 1) => {
  const rangeArray = [];

  let iterator;

  if (end <= start) {
    const temp = end;
    end = start;
    start = temp;
  }

  for (iterator = start; iterator <= end; iterator += increment) {
    rangeArray.push(iterator);
  }

  return rangeArray;
};

export const arraySum = (array) => {
  let result = 0;
  array.map(number => (
    result += number
  ));
  return result;
};

export default rangeFrom;
