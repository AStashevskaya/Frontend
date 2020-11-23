import create from './utils/create';

export default class FieldCell {
  constructor(puzzle, el) {
    const { left, top, ind } = el;
    this.puzzle = puzzle;
    this.width = puzzle.width;
    this.left = left;
    this.top = top;
    this.ind = typeof (ind) === 'number' ? ind : '';
    this.image = puzzle.image;
    this.q = puzzle.q;
    this.size = this.width / this.q;
    this.bgPosX = el.bgPosX;
    this.bgPosY = el.bgPosY;
  }

  getPos() {
    this.bgPosX = `${-this.left * this.size}px`;
    this.bgPosY = `${-this.top * this.size}px`;
  }

  render() {
    this.container = create('div', 'fieldcell', `${this.ind}`);
    this.container.style.backgroundImage = `url(./assets/images/${this.image})`;
    this.container.style.backgroundSize = `${this.width}px`;
    this.container.style.width = `${this.size}px`;
    this.container.style.height = `${this.size}px`;
    this.container.style.top = `${this.top * this.size}px`;
    this.container.style.left = `${this.left * this.size}px`;
    this.container.style.backgroundPositionX = this.bgPosX;
    this.container.style.backgroundPositionY = this.bgPosY;
    if (this.q > 5) {
      this.container.style.fontSize = '16px';
    } else {
      this.container.style.fontSize = '36px';
    }
    if (this.ind === '') {
      this.container.style.opacity = '0';
    }
    return this.container;
  }
}
