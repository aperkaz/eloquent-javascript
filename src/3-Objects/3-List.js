function ListElement(value) {
  this.value = value;
  this.rest = null;
}

export const arrayToList = (array) => {
  let list = null;
  let listIt;

  array.forEach((element) => {
    if (list === null) {
      list = new ListElement(element);
    } else {
      listIt = list;

      while (listIt.rest !== null) {
        listIt = listIt.rest;
      }

      listIt.rest = new ListElement(element);
    }
  });
  return list;
};

export const listToArray = (list) => {
  const array = [];
  let iterator = {};

  iterator = Object.assign(iterator, list);

  do {
    array.push(iterator.value);
    if (iterator.rest !== null) {
      iterator = iterator.rest;
    }
  } while (iterator.rest !== null);

  if (iterator.value !== null) {
    array.push(iterator.value);
  }

  return array;
};

/* eslint-disable */
export const prepend = (element, list) => {
  element.rest = list;
  list = element;
};
/* eslint-enable */

export const nth = (list, index) => {
  let iterator = list;
  let iteratorIndex = 0;

  while (iterator.rest !== null) {
    if (iteratorIndex === index) {
      return iterator.value;
    }
    iterator = iterator.rest;
    iteratorIndex += 1;
  }

  // last element check
  iteratorIndex += 1;
  if (iteratorIndex === index) {
    return iterator.value;
  }
  return undefined;
};
