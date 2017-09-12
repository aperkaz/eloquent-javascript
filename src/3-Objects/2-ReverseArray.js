export const reverseArray = (array) => {
  const reversedArray = [];
  const length = array.length;

  array.map((element, index) => (
    reversedArray[(length - 1) - index] = element
  ));

  return reversedArray;
};

/* eslint-disable no-param-reassign */
export const reverseArrayInPlace = (array) => {
  let head;

  for (head = 0; head < (array.length - 1) / 2; head += 1) {
    const tail = (array.length - 1) - head;
    const temp = array[head];
    array[head] = array[tail];
    array[tail] = temp;
  }
  return array;
};
/* eslint-enable no-param-reassign */
