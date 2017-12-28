/*
* Rewrite the array-native methods:
* some and every as High Order Functions
* */

export const every = (array, filterFunction) => {
  // eslint-disable-next-line
  for (const element of array) {
    if (!filterFunction(element)) {
      return false;
    }
  }
  return true;
};


export const some = (array, filterFunction) => {
  // eslint-disable-next-line
  for(const element of array){
    if (filterFunction(element)) {
      return true;
    }
  }
  return false;
};
