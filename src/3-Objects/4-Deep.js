/* eslint-disable no-restricted-syntax */
/*
* Manual implementation of js arg comparison (values & objects)
*/

// value methods
const isValue = arg => (
  typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol'
);

const areValues = (arg1, arg2) => (
  (isValue(arg1) && isValue(arg2))
);

const compareValues = (arg1, arg2) => (
  arg1 === arg2
);

// null/undefined methods
const isUndefined = arg => (
  typeof arg === 'undefined' || arg === null
);

const areNull = (arg1, arg2) => (
  isUndefined(arg1) && isUndefined(arg2)
);

// object methods
const isObject = arg => (
  typeof arg === 'object'
);

const areObjects = (arg1, arg2) => (
  isObject(arg1) && isObject(arg2)
);

// main method
const deepEqual = (arg1, arg2) => {
  // are values
  if (areValues(arg1, arg2)) {
    return compareValues(arg1, arg2);
  }

  // are null
  if (areNull(arg1, arg2)) {
    return true;
  }

  // are objects
  if (areObjects(arg1, arg2)) {
    if (arg1 === null || arg2 === null) {
      if (arg1 !== arg2) {
        return false;
      }
    } else {
      const keys1 = Object.keys(arg1).sort();
      const keys2 = Object.keys(arg2).sort();

      if (keys1.length !== keys2.length) {
        return false;
      }

      let index;
      for (index = 0; index < keys1.length; index += 1) {
        if (keys2[index] !== keys2[index]) {
          return false;
        }
        if (arg1[`${keys1[index]}`] !== arg2[`${keys1[index]}`]) {
          return false;
        }
      }
    }
    return true;
  }

  // mix -> false
  return false;
};

export default deepEqual;
