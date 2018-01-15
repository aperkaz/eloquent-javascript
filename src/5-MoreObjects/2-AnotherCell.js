/*


*/

import { repeat } from './TextCell';

class StretchCell {
  constructor(inner, width, height) {
    this.inner = inner;
    let text = this.inner.text;
    if (text.length < height) {
      while (height - text.length > 0) {
        text = text.concat(['']);
        // eslint-disable-next-line
        height -= 1;
      }
    }

    this.inner.text = text.map((line) => {
      if (line.length < width) {
        return line.concat(repeat(' ', width - line.length));
      }
      return line;
    });
  }

  minHeight() {
    return this.inner.minHeight();
  }

  minWidth() {
    return this.inner.minWidth();
  }

  draw(w, h) {
    return this.inner.draw(w, h);
  }
}

export default StretchCell;
