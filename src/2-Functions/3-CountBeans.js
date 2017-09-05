const countCharacters = (string, character) => {
  let count = 0;
  string.split('').map((char) => {
    if (char === character) {
      count += 1;
    }
    return count;
  },
  );
  return count;
};

export default countCharacters;
