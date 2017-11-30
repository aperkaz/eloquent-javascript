/* Flatten a array of arrays into a single array*/

const flatten = arrayOfArrays => (
  arrayOfArrays.reduce((accumulator, current) => (
    accumulator.concat(current)
  ))
);

export default flatten;
