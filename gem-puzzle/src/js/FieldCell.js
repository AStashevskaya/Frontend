import create from './utils/create';

const SMALL_FONT_SIZE = 16;
const BIG_FONT_SIZE = 36;
const CHANGING_FS = 5;

export default class FieldCell {
  constructor(puzzle, el) {
    const { left, top, idx } = el;

    this.puzzle = puzzle;
    this.width = puzzle.width;
    this.image = puzzle.image;

    this.fieldSize = puzzle.fieldSize;
    this.size = this.width / this.fieldSize;

    this.left = left;
    this.top = top;
    this.idx = typeof (idx) === 'number' ? idx : '';

    this.bgPosX = el.bgPosX;
    this.bgPosY = el.bgPosY;
  }

  getBackgroundPosition() {
    this.bgPosX = `${-this.left * this.size}px`;
    this.bgPosY = `${-this.top * this.size}px`;
  }

  render() {
    this.container = create('div', 'fieldcell', `${this.idx}`);

    this.container.style.backgroundImage = `url(./assets/images/${this.image})`;
    this.container.style.backgroundSize = `${this.width}px`;

    this.container.style.width = `${this.size}px`;
    this.container.style.height = `${this.size}px`;

    this.container.style.top = `${this.top * this.size}px`;
    this.container.style.left = `${this.left * this.size}px`;

    this.container.style.backgroundPositionX = this.bgPosX;
    this.container.style.backgroundPositionY = this.bgPosY;

    if (this.fieldSize > CHANGING_FS) {
      this.container.style.fontSize = `${SMALL_FONT_SIZE}px`;
    } else {
      this.container.style.fontSize = `${BIG_FONT_SIZE}px`;
    }

    if (this.idx === '') {
      this.container.style.opacity = '0';
    }

    return this.container;
  }
}
