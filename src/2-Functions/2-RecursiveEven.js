const isEven = (number) => {
  if (number === 0) { return true; }

  if (number === 1) { return false; }

  if (number >= 0) {
    return isEven(number - 2);
  }
  return isEven(-number);
};

export default isEven;
