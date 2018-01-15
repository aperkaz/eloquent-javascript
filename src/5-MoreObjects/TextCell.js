export const repeat = (string, times) => {
  let result = '';
  for (let i = 0; i < times; i += 1) { result += string; }
  return result;
};

class TextCell {
  constructor(text) {
    this.text = text.split('\n');
  }
  minWidth() {
    return this.text.reduce((width, line) => Math.max(width, line.length), 0);
  }

  minHeight() {
    return this.text.length;
  }

  draw(width, height) {
    const result = [];
    for (let i = 0; i < height; i += 1) {
      const line = this.text[i] || '';
      result.push(line + repeat(' ', width - line.length));
    }
    return result;
  }
}

export default TextCell;
