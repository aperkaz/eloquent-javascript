const typeError = () => (
  'The argument needs to be of Vector type'
);

export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2));
  }

  plus(vec) {
    if (vec instanceof Vector) {
      return new Vector(this.x + vec.x, this.y + vec.y);
    }
    return typeError();
  }

  minus(vec) {
    if (vec instanceof Vector) {
      return new Vector(this.x - vec.x, this.y - vec.y);
    }
    return typeError();
  }
}
